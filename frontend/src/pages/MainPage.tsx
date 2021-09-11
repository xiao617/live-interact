import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Modal} from 'antd';
import { userBody } from '../types/typeObject';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser} from './../features/user/userSlice';
export default function MainPage(){
    const dispatch = useAppDispatch();
    const user:userBody = useAppSelector(selectUser);
    const {Header,Content,Footer} = Layout;
    const [isModalVisible, setIsModalVisible] = useState(false);
    function checkUserState(){
        if(user.status === "visitor")
        {
            setIsModalVisible(true);
        }
    }
    const hideModal = () =>{
        setIsModalVisible(false);
    }
    useEffect(()=>{
        checkUserState();
    }
    ,[]);
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                {user.status}
            </div>
            <Modal title="Login" visible={isModalVisible} onCancel={hideModal}>

            </Modal>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}