import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Modal, Button, Input, Row, Col, Form,notification } from 'antd'
import { userBody, userState } from '../types/typeObject'
import { useAppSelector, useAppDispatch } from './../app/hooks'
import { selectUser, userLogin } from './../features/user/userSlice'
import { UserOutlined } from '@ant-design/icons'
import { NodeService } from '../service/nodeService'
import { Link } from 'react-router-dom'

export default function LoginPage() {

  //const emptyUser = {id:'',name:'',score:0,status:'visitor'} as userBody;
  //const user:userBody = state.location.state.user ?? emptyUser;
  const { Header, Content, Footer } = Layout
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputName, setInputName] = useState<string>('')
  const [inputRoom, setInputRoom] = useState<string>('')
  const nodeService = new NodeService()

  
  async function submitUser(userData: userBody) {
    const res = await nodeService.postUser(userData);
    return res;
  }
  useEffect(() => {
    
  }, [])

  async function onFinish(values: userBody){
    const res = await submitUser(values);
    console.log(res,"login~~~");
    if(res.result === false)//register or login error
    {
      console.log('Fail ');
      openNotification();
    }
    else
    {
      sessionStorage.setItem('username',values.name)
      sessionStorage.setItem('userid',res._id)
      window.location.pathname = '/'
      console.log('Success ');
    }
    
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }
  const openNotification = () => {
    notification.open({
      message: '登入失敗',
      description:
        '帳號註冊失敗或是密碼有誤',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1"></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div>
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Verification Code"
        name="verification_code"
        rules={[{ required: true, message: 'Please input your verification code!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="ghost" htmlType="submit">
          Login / Register
        </Button>
      </Form.Item>
    </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Live Interact</Footer>
    </Layout>
  )
}
