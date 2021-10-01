import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import {
  Layout,
  Menu,
  Breadcrumb,
  Modal,
  Button as antButton,
  Row,
  Col,
  Tabs,
} from 'antd'
import {
  userBody,
  optionBody,
  questionBody,
  roomBody,
  paramBody,
  chartInfoBody,
  chartBody,
  userState,
} from '../types/typeObject'
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser, userLogin, getUser } from './../features/user/userSlice'
import { UserOutlined } from '@ant-design/icons'
import { NodeService } from '../service/nodeService'
import { store } from './../app/store'
import { Link, useParams } from 'react-router-dom'
import {io} from 'socket.io-client'
import { DataTable } from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Chart} from 'primereact/chart';

export default function ControlRoom() {
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
  const [questionVisiable,setQuestionVisiable] = useState<boolean>(false);
  const socket = io("127.0.0.1:8888",{
    
  })
  const username = sessionStorage.getItem('username') ?? "";
  const userid = sessionStorage.getItem('userid') ?? "";
  const { Header, Content, Footer } = Layout
  const { TabPane } = Tabs
  const [questionAns, setQuestionAns] = useState<optionBody>(emptyChoice)
  const [problemList, setProblemList] = useState<Array<questionBody>>([])
  
  const emptyRoom = { roomId: '', questions: [], owner: userid ,roomName:"",roomPassword:""} as roomBody
  const emptyQuestion = { id: "",question: "",isActive:false,choices:[]} as questionBody
  const emptyChartInfo = {data:[],backgroundColor:[],hoverBackgroundColor:[]} as chartInfoBody
  const emptyChart = {labels:[],datasets:[]} as chartBody
  const [nowQuestion,setNowQuestion] = useState<questionBody>(emptyQuestion)
  const [roomInfo, setRoomInfo] = useState<roomBody>(emptyRoom)
  const [nowChart,setNowChart] = useState<chartBody>(emptyChart)
  const [canResponse, setCanResponse] = useState(false)
  const nodeService = new NodeService()
  const lightOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    }
};
  function checkUserState() {
    if (username === null) {
      window.location.pathname = '/login';
    }
  }
  const getChoiceLabel = (choices: Array<optionBody>) => {
    let res= new Array<string>();
    choices.forEach((e)=>(res.push(e.option)))
    return res;
  }
  const problemState = (q:questionBody) => {
    console.log(q);
    return (
      <div>
        <Button className="p-button-secondary" icon={"pi pi-lock-open"} onClick={(e)=>{
          
          socket.emit('question-active',q,roomId);
          console.log('click');
          setNowQuestion(q);
          const colorList = nodeService.getColorRandomList(q.choices.length);
          const chartInfoInit = {
            data: new Array(q.choices.length).fill(0),
            backgroundColor: colorList,
            hoverBackgroundColor: colorList
          }
          const chartInit = {
            labels: getChoiceLabel(q.choices),
            datasets: [chartInfoInit]
          }
          setNowChart(chartInit);
          setQuestionVisiable(true);
          console.log(chartInit)
        }}></Button>
      </div>
    )
  }
//   const chartData = {
//     labels: ['A', 'B', 'C'],
//     datasets: [
//         {
//             data: [0, 0, 0],
//             backgroundColor: [
//                 "#FF6384",
//                 "#36A2EB",
//                 "#FFCE56"
//             ],
//             hoverBackgroundColor: [
//                 "#FF6384",
//                 "#36A2EB",
//                 "#FFCE56"
//             ]
//         }]
// };
  const onLogout = () => {
    sessionStorage.clear();
    console.log('Logout !');
    window.location.pathname = '/login';
  }
  const onCancelModal = () => {
    setQuestionVisiable(false);
  }
  const choiceTemplate = (e: optionBody) => {
    return (<li>{e.option}</li>);
  }
  
  useEffect(() => {
    console.log(username)
    console.log(roomId)
    checkUserState()
    socket.on("connect",()=>{
      socket.emit("check-room",roomId,userid)
    });
    socket.on("get-room",(msg:roomBody)=>{
      try{
        console.log(msg)
        setRoomInfo(msg)
      }
      catch(e){
        console.error(e);
      }
      
    })
    socket.on("hello",(msg:any)=>{
        console.log(msg)
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
              <DataTable value={roomInfo.questions}>
                <Column field="question" header="問題："></Column>
                <Column body={problemState}></Column>
              </DataTable>
            </Col>
            <Col span={3}></Col>
          </Row>
        </div>
        <div>
          <Modal visible={questionVisiable} title="Active Question" onCancel={onCancelModal} footer={[]}>
            <h4>{nowQuestion.question}</h4>
            <ul>
              {nowQuestion.choices.map((e) => (choiceTemplate(e)))}
            </ul>
            <Chart type="doughnut" data={nowChart} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
          </Modal>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
    </Layout>
  )
}
