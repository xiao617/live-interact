import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import {
  Layout,
  Menu,
  Breadcrumb,
  Modal,
  Button,
  Input,
  Row,
  Col,
  Card,
  List,
  Tabs,
  Radio,
  Space,
} from 'antd'
import {
  userBody,
  optionBody,
  questionBody,
  roomBody,
  paramBody,
  userState,
} from '../types/typeObject'
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser, userLogin, getUser } from './../features/user/userSlice'
import { UserOutlined } from '@ant-design/icons'
import { NodeService } from '../service/nodeService'
import { store } from './../app/store'
import { Link, useParams } from 'react-router-dom'
import {io} from 'socket.io-client'

export default function QuestionRoom() {
  //let {roomId} = useParams();
  const roomId: string = useParams<paramBody>()['roomId']
  //const  roomId = "";
  const emptyChoice: optionBody = { id: '', option: '', isAnswer:false,selectedList: [] }
  // const dispatch = useAppDispatch()
  // //const user:userBody = useAppSelector(selectUser);
  // //const user:userBody = useAppSelector(state => state.user);
  // const user: userState = useAppSelector(selectUser)
  //const userRedux = dispatch(getUser());
  //const user:userBody = state.location.state.user;
  const socket = io("127.0.0.1:8888",{
    
  })
  const username = sessionStorage.getItem('username') ?? "";
  const userid = sessionStorage.getItem('userid') ?? "";
  const { Header, Content, Footer } = Layout
  const { TabPane } = Tabs
  const [questionAns, setQuestionAns] = useState<optionBody>(emptyChoice)
  const [problemList, setProblemList] = useState<Array<questionBody>>([])
  const emptyQuestion = { id: "",question: "",isActive:false,choices:[]} as questionBody
  const [nowQuestion,setNowQuestion] = useState<questionBody>(emptyQuestion)
  const [questionVisible,setQuestionVisible] = useState<boolean>(false);
  const emptyRoom = { roomId: '', questions: [], owner: userid ,roomName:"",roomPassword:""} as roomBody
  const [roomInfo, setRoomInfo] = useState<roomBody>(emptyRoom)
  const [canResponse, setCanResponse] = useState(false)
  const nodeService = new NodeService()

  function checkUserState() {
    if (username === null) {
      window.location.pathname = '/login';
    }
  }
  
  const choiceTemplate = (choice: optionBody) => {
    return (
      <Radio value={choice}>
        {choice.option}
      </Radio>
    )
  }
  const onLogout = () => {
    sessionStorage.clear();
    console.log('Logout !');
    window.location.pathname = '/login';
  }
  async function getRoomInfo() {
    await nodeService.getRoom(roomId).then((e) => {
      if (e.length > 0) {
        setRoomInfo(e[0])
      }
    })
  }
  
  async function submitAns() {
    console.log(questionAns);
    socket.emit(`question-response`,roomId,questionAns.id);
    setCanResponse(true);
  }
  useEffect(() => {
    console.log(username)
    console.log(roomId)
    checkUserState()
    // getRoomInfo()
    socket.on("connect",()=>{
      socket.emit("visit-room",roomId,userid)
    });
    socket.on(`room-active-${roomId}`,(msg)=>{
      console.log(msg,"from room-active");
      setNowQuestion(msg);
      setQuestionVisible(true);
      setCanResponse(false);
    })
    socket.on(`room-disactive-${roomId}`,(msg) => {
      setQuestionVisible(false);
    })
    //console.log(userRedux);
  }, [])
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">{username}</Menu.Item>
          <Link to={{ pathname: '/dashboard' }}>
            <Menu.Item key="2">個人總覽</Menu.Item>
          </Link>
          <Link to={{ pathname: '/' }}>
            <Menu.Item key="3">首頁</Menu.Item>
          </Link>
          <Menu.Item key="4" onClick={onLogout}>Logout</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Row>
            <Col span={6}></Col>
            <Col span={3}></Col>
            <Col span={12}>
              <Card title={"Room: "+roomId} >
              </Card>
              
              
            </Col>
            <Col span={3}></Col>
          </Row>
        </div>
        <div>
          <Modal visible={questionVisible} title="Active Question"  footer={[
            <Button onClick={submitAns} disabled={canResponse}>Sumbit</Button>
          ]}>
            <h4>{nowQuestion.question}</h4>
            <Radio.Group onChange={(e)=>(setQuestionAns(e.target.value))}>
              {nowQuestion.choices.map((e)=>(choiceTemplate(e)))}
            </Radio.Group>
              
            
          </Modal>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
    </Layout>
  )
}
