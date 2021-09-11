import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Modal, Button,Input,Row,Col} from 'antd';
import { userBody } from '../types/typeObject';
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser,userLogin} from './../features/user/userSlice';
import { UserOutlined } from '@ant-design/icons';
import { NodeService } from '../service/nodeService';
import { store } from './../app/store';

export default function CreateRoom(state:any){
    //const dispatch = useAppDispatch();
    //const user:userBody = useAppSelector(selectUser);
    const user:userBody = state.location.state.user;
    const {Header,Content,Footer} = Layout;
    const nodeService = new NodeService();


    useEffect(()=>{
        console.log(user);
    }
    ,[]);
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">{user.name}</Menu.Item>
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
                    <Col span={8}>  
                        
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
        </Layout>
    );
}