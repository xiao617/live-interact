import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Modal, Button,Input,Row,Col,Card,List,Tabs,Radio,Space} from 'antd';
import { userBody,optionBody,questionBody,roomBody,paramBody,userState } from '../types/typeObject';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser,userLogin,getUser} from './../features/user/userSlice';
import { UserOutlined } from '@ant-design/icons';
import { NodeService } from '../service/nodeService';
import { store } from './../app/store';
import {Link,useParams } from "react-router-dom";

export default function QuestionRoom(){
    //let {roomId} = useParams();
    const roomId:string = useParams<paramBody>()["roomId"];
    //const  roomId = "";
    const emptyChoice:optionBody = {id:"",option:"",selectedList:[]};
    const dispatch = useAppDispatch();
    //const user:userBody = useAppSelector(selectUser);
    //const user:userBody = useAppSelector(state => state.user);
    const user:userState = useAppSelector(selectUser);
    //const userRedux = dispatch(getUser());
    //const user:userBody = state.location.state.user;
    const {Header,Content,Footer} = Layout;
    const {TabPane} = Tabs;
    const [questionAns,setQuestionAns] = useState<optionBody>(emptyChoice);
    const [problemList,setProblemList] = useState<Array<questionBody>>([]);
    const emptyRoom = {roomId:"",questions:[],owner:user.id} as roomBody;
    const [roomInfo,setRoomInfo] = useState<roomBody>(emptyRoom);
    const [canResponse,setCanResponse] = useState(false);
    const nodeService = new NodeService();
   
    
    const previewTemplate = (problem: questionBody,ind:number) => {
        console.log(problem);
        const tabIndx = `Q${ind+1}`
        return (
            <TabPane tab={tabIndx} key={ind}>
                <h4>Question: {problem.question}</h4>
                <Radio.Group onChange={(e)=>(setQuestionAns(e.target.value))}>
                    <Space direction="vertical">
                    {problem.choices.map((e,i)=>(choiceTemplate(e,i)))}
                    </Space>
                </Radio.Group>
            </TabPane>
        );
    }
    const choiceTemplate = (choice: optionBody,ind:number) => {
        return (<Radio value={choice} disabled={canResponse}>
            {choice.option}
        </Radio>);
    }
    
    async function getRoomInfo()
    {
        await nodeService.getRoom(roomId).then(
            (e)=>{
                if(e.length > 0)
                {
                    setRoomInfo(e[0]);
                }
            }
        );
    
    }
    async function submitToDB()
    {
        await nodeService.updateRoom(roomInfo);
        setCanResponse(true);
    }
    async function submitAns()
    {
        const indChoice = parseInt(questionAns.id)??-1;
        console.log(indChoice);
        if(indChoice!== -1)
        {
            (roomInfo.questions[0].choices)[indChoice].selectedList.push(user);
            setRoomInfo(roomInfo);
        }
        await submitToDB();

        //console.log(questionAns);
    }
    useEffect(()=>{
        console.log(user);
        console.log(roomId);
        getRoomInfo();
        
        //console.log(userRedux);
        
    }
    ,[]);
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1">{user.name}</Menu.Item>
                <Link to={{pathname:"/dashboard"}}>
                    <Menu.Item key="2">????????????</Menu.Item>
                </Link>
                <Link to={{pathname:"/"}}>
                    <Menu.Item key="3">??????</Menu.Item>
                </Link>
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
                        <Tabs>
                        {roomInfo.questions.map((e,i)=>(previewTemplate(e,i)))}
                            
                        </Tabs>
                        <br />
                        <Button onClick={submitAns} disabled={canResponse}>Submit</Button>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
            
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
        </Layout>
    );
}