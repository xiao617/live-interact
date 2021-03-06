import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Modal, Button,Input,Row,Col,Card, Tabs,Tag} from 'antd';
import { userBody,optionBody,questionBody,roomBody,userState } from '../types/typeObject';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser,userLogin,getUser} from './../features/user/userSlice';
import { UserOutlined } from '@ant-design/icons';
import { NodeService } from '../service/nodeService';
import { store } from './../app/store';
import {Link} from "react-router-dom";

export default function Dashboard(){
    const dispatch = useAppDispatch();
    //const user:userBody = useAppSelector(state => state.user);
    const user:userState = useAppSelector(selectUser);
    //const userRedux = dispatch(getUser());
    //const user:userBody = state.location.state.user;
    const [allOwnerRooms,setAllOwnerRooms] = useState<Array<roomBody>>([]);
    const {Header,Content,Footer} = Layout;
    const {TabPane} = Tabs;
    
    const nodeService = new NodeService();
    async function getUserRoom(){
        await nodeService.getAllOwnRooms(user).then((e)=>(setAllOwnerRooms(e)));
    }
    const roomTemplate = (roomInfo:roomBody,ind:number) => {
        const tabHeader = `Q${ind}`;
        return (
            <TabPane tab={tabHeader} key={ind}>
                <h2>Question: {roomInfo.questions[0].question}</h2>
                <h3>Answer:</h3>
                {roomInfo.questions === undefined?"":roomInfo.questions[0].choices.map((e,i)=>(choiceTemplate(e,i)))}
            </TabPane>
        )
    }
    const choiceTemplate = (choice:optionBody,ind:number) =>{
        return (
            <div>
                <h4>{ind+1}) {choice.option}</h4>
                <h5>Who choice this?</h5>
                <div>
                    {choice.selectedList.map((e)=>selectorTemplate(e))}
                </div>
            </div>
        );
    }
    const selectorTemplate = (user:userBody) =>{
        return (
            <Tag>
                {user.name}
            </Tag>
        );
    }
    useEffect(()=>{
        console.log(user);
        //console.log(userRedux);
        getUserRoom()
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
                        
                    </Col>
                    <Col span={3}></Col>
                    <Col span={12}>
                        <Tabs>
                            {allOwnerRooms.map((e,i)=>(roomTemplate(e,i)))}
                        </Tabs>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
            
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
        </Layout>
    );
}