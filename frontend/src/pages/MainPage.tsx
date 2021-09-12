import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Modal, Button,Input,Row,Col} from 'antd';
import { userBody } from '../types/typeObject';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser,userLogin} from './../features/user/userSlice';
import { UserOutlined } from '@ant-design/icons';
import { NodeService } from '../service/nodeService';
import {Link} from "react-router-dom";

export default function MainPage(){
    const dispatch = useAppDispatch();
    const user:userBody = useAppSelector(selectUser);
    //const emptyUser = {id:'',name:'',score:0,status:'visitor'} as userBody;
    //const user:userBody = state.location.state.user ?? emptyUser;
    const {Header,Content,Footer} = Layout;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputName,setInputName] = useState<string>("");
    const [inputRoom,setInputRoom] = useState<string>("");
    const nodeService = new NodeService();

    function checkUserState(){
        if(user.status === "visitor")
        {
            setIsModalVisible(true);
        }
    }
    async function hideModal(){
        setIsModalVisible(false);
        await nodeService.postUser(inputName).then((e)=>(dispatch(userLogin(e))))
    }
    async function sumbitRoom(){
        window.location.pathname = `/question-room/${inputRoom}`;
    }
    useEffect(()=>{
        checkUserState();
    }
    ,[]);
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">{user.name}</Menu.Item>
                <Menu.Item key="2">個人總覽</Menu.Item>
                
            </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>Enter Room: 
                        <Input size="middle" placeholder="輸入代號" onChange={(e)=>(setInputRoom(e.target.value))}/>
                        <Link to={{pathname:"/question-room/"+inputRoom}}>
                            <Button>Go</Button>
                        </Link>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <br />
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>  
                        <Link to={{ pathname:"/create-room"  }}>
                            <Button block>
                                Create Room
                            </Button>
                        </Link>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
            <Modal title="Login" 
            visible={isModalVisible} 
            onCancel={hideModal}
            footer={[
                <Button key="submit" type="primary" onClick={hideModal}>
                    Submit
                </Button>
            ]}
            >
                <Input size="middle" placeholder="輸入姓名" prefix={<UserOutlined />} onChange={(e)=>(setInputName(e.target.value))} />
            </Modal>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
        </Layout>
    );
}