import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Modal, Button, Input, Row, Col, Card,Form,Switch, Radio,Space,Table } from 'antd'
import { userBody, optionBody, questionBody, roomBody, userState } from '../types/typeObject'
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser, userLogin, getUser } from './../features/user/userSlice'
import { UserOutlined } from '@ant-design/icons'
import { NodeService } from '../service/nodeService'
import { store } from './../app/store'
import { Link } from 'react-router-dom'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { DataTable } from 'primereact/datatable';
import {Column} from 'primereact/column';

export default function CreateRoom() {
  // const dispatch = useAppDispatch()
  // const user: userState = useAppSelector(selectUser)
  //const user:userBody = useAppSelector(state => state.user);
  //const userRedux = dispatch(getUser());
  //const user:userBody = state.location.state.user;
  const username = sessionStorage.getItem('username') ?? "";
  const userid = sessionStorage.getItem('userid') ?? "";
  const { Header, Content, Footer } = Layout
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [roomIdVisiable, setRoomIdVisiable] = useState('')
  const [problemList, setProblemList] = useState<Array<questionBody>>([])
  const [problemName, setProblemName] = useState('')
  const [choiceName, setChoiceName] = useState('')
  const [choiceList, setChoiceList] = useState<Array<optionBody>>([])
  const [ansValue, setAnsValue] = useState<optionBody>()
  const [roomId, setRoomId] = useState<string>('')
  const [roomName,setRoomName] = useState<string>('')
  const [roomPass,setRoomPass] = useState<string>('')
  const [selectQuestion,setSelectQuestion] = useState<questionBody>()
  const [questionId,setQuestionId] = useState<number>(0)
  const nodeService = new NodeService()
  
  async function createChoice() {
    const newChoice: optionBody = {
      id: choiceList.length.toString(),
      option: choiceName,
      isAnswer: false,
      selectedList: [],
    }
    await setChoiceList((theArr) => [...theArr, newChoice])
    setChoiceName('')
    //console.log(choiceList);
  }
  function checkUserState() {
    if (username === null) {
      window.location.pathname = '/login';
    }
  }
  const onLogout = () => {
    sessionStorage.clear();
    console.log('Logout !');
    window.location.pathname = '/login';
  }
  const deleteChoice = () => {
    setChoiceList([])
  }
  const hideModal = () => {
    setIsModalVisible(false)
  }
  async function submitProblem() {
    const newProblem: questionBody = { id:questionId.toString(),question: problemName, choices: choiceList,isActive:false }
    await setProblemList((theArr) => [...theArr, newProblem])
    setQuestionId(questionId+1)
    setChoiceList([])
    setChoiceName('')
    setProblemName('')
  }
  const onChangeAnswer = (e: optionBody) =>{
    if(ansValue !== undefined)
    {
      ansValue.isAnswer = false
    }
    e.isAnswer = true
    setAnsValue(e)
    // console.log(choiceList)
  }
  async function submitRoom() {
    console.log(ansValue)
    const res: roomBody = await nodeService.postRoom(problemList, userid,roomName,roomPass)
    setRoomIdVisiable(res.roomId)
    setIsModalVisible(true)
    setProblemName('')
    setProblemList([])
    setChoiceList([])
    setChoiceName('')
  }
  const choiceTemplate = (choice: optionBody) => {
    return (
      
        <Radio value={choice}>{choice.option}</Radio>
      
    )
  }
  const problemTemplate = (problem: questionBody) => {
    return (
      <div>
        <Card title={problem.question}>{problem.choices.map((e) => choiceTemplate(e))}</Card>
      </div>
    )
  }
  const deleteQuestion = () => {
    console.log(selectQuestion)
    if(selectQuestion !== undefined)
    {
      setProblemList(problemList.filter((e)=>(e.id!==selectQuestion.id)))
    }
    
  }
  useEffect(() => {
    console.log(username)
    
    checkUserState()
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
            <Col span={6}>
              <Card title="已設定題目">
                <DataTable value={problemList} selectionMode="radiobutton" selection={selectQuestion} onSelectionChange={(e)=> setSelectQuestion(e.value)} dataKey="id">
                  <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                  <Column field="question" header="題目" ></Column>
                </DataTable>
                <Button onClick={deleteQuestion}>刪除題目</Button>
              </Card>
            </Col>
            <Col span={2}></Col>
            <Col span={12}>
              <Row>
              <Col span={24}>
              <Card title="房間設置">
              <p>房間名稱：</p>
                <Input
                  size="middle"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <p>房間密碼：</p>
                <Input.Password
                  size="middle"
                  value={roomPass}
                  onChange={(e) => setRoomPass(e.target.value)}
                />
              </Card>
              </Col>
              </Row>
              <Row>
                <Col span={24}>
              <Card title="新增題目">
                <p>題目敘述：</p>
                <Input
                  size="middle"
                  value={problemName}
                  onChange={(e) => setProblemName(e.target.value)}
                />
                <br />
                <br />
                <p>新增選項：</p>
                <div>
                  <Radio.Group onChange={(e)=>onChangeAnswer(e.target.value)} value={ansValue}>
                    <Space direction="vertical">
                  {choiceList.map((e) => choiceTemplate(e))}
                    </Space>
                  </Radio.Group>
                </div>
                <br />
                <Input
                  size="middle"
                  value={choiceName}
                  onChange={(e) => setChoiceName(e.target.value)}
                />
                <Button onClick={createChoice}>添加選項</Button>
                <Button onClick={deleteChoice}>刪除所有選項</Button>
                <Button onClick={submitProblem}>送出題目</Button>
              </Card>
              </Col>
              <Button onClick={submitRoom}>送出房間設定</Button>
              </Row>
              </Col>
              <Col span={4}></Col>
          </Row>
        </div>
        <Modal
          title="Room ID"
          visible={isModalVisible}
          onCancel={hideModal}
          footer={[
            <Button key="submit" type="primary" onClick={hideModal}>
              Close
            </Button>,
          ]}
        >
          <h2>{roomIdVisiable}</h2>
        </Modal>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
    </Layout>
  )
}
