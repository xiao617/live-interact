import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Modal, Button,Input,Row,Col,Card} from 'antd';
import { userBody,optionBody,questionBody,roomBody,userState } from '../types/typeObject';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser,userLogin,getUser} from './../features/user/userSlice';
import { UserOutlined } from '@ant-design/icons';
import { NodeService } from '../service/nodeService';
import { store } from './../app/store';
import {Link} from "react-router-dom";

export default function CreateRoom(){
    const dispatch = useAppDispatch();
    const user:userState = useAppSelector(selectUser);
    //const user:userBody = useAppSelector(state => state.user);
    //const userRedux = dispatch(getUser());
    //const user:userBody = state.location.state.user;
    const {Header,Content,Footer} = Layout;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [roomIdVisiable,setRoomIdVisiable] = useState("");
    const [problemList,setProblemList] = useState<Array<questionBody>>([]);
    const [problemName,setProblemName] = useState("");
    const [choiceName,setChoiceName] = useState("");
    const [choiceList,setChoiceList] = useState<Array<optionBody>>([]);
    const [roomId,setRoomId] = useState<string>("");
    const nodeService = new NodeService();
    async function createChoice() {
        const newChoice:optionBody = {id:choiceList.length.toString(),option:choiceName,selectedList:[]};
        await setChoiceList((theArr)=>([...theArr,newChoice]));
        setChoiceName("");
        //console.log(choiceList);
    }
    const deleteChoice = () => {
        setChoiceList([]);
    }
    const hideModal = () => {
        setIsModalVisible(false);
    }
    async function submitProblem(){
        const newProblem:questionBody = {question:problemName,choices:choiceList};
        await setProblemList((theArr)=>([...theArr,newProblem]));
        setChoiceList([]);
        setChoiceName("");
        setProblemName("");
        
    }
    async function submitRoom(){
        const res:roomBody = await nodeService.postRoom(problemList,user);
        setRoomIdVisiable(res.roomId);
        setIsModalVisible(true);
        setProblemName("");
        setProblemList([]);
        setChoiceList([]);
        setChoiceName("");
    }
    const choiceTemplate = (choice: optionBody) => {
        return (<div>
            <p>{choice.option}</p>
        </div>);
    }
    const problemTemplate = (problem: questionBody) => {
        return (
            <div>
                <Card title={problem.question}>
                {problem.choices.map((e)=>(choiceTemplate(e)))}
                </Card>
            </div>
        );
    }
    useEffect(()=>{
        console.log(user);
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
                    <Col span={6}>
                        <Card title="???????????????">
                            {problemList.map((e)=>(problemTemplate(e)))}
                        </Card>
                    </Col>
                    <Col span={3}></Col>
                    <Col span={12}>
                        <Card title="????????????">
                            <p>???????????????</p>
                            <Input size="middle" value={problemName} onChange={(e)=>(setProblemName(e.target.value))} />
                            <br /><br />
                            <p>???????????????</p>
                            <div>
                                {choiceList.map((e)=>(choiceTemplate(e)))}
                            </div>
                            <Input size="middle" value={choiceName} onChange={(e)=>(setChoiceName(e.target.value))} />
                            <Button onClick={createChoice}>????????????</Button>
                            <Button onClick={deleteChoice}>??????????????????</Button>
                            <Button onClick={submitProblem}>????????????</Button>
                            
                        </Card>
                        <Button onClick={submitRoom}>????????????????????????</Button>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
            
            <Modal title="Room ID" 
            visible={isModalVisible} 
            onCancel={hideModal}
            footer={[
                <Button key="submit" type="primary" onClick={hideModal}>
                    Close
                </Button>
            ]}
            >
                <h2>{roomIdVisiable}</h2>
            </Modal>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
        </Layout>
    );
}