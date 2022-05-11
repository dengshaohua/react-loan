import React, { useState } from 'react';
import {Route,Routes,Link,Navigate } from 'react-router-dom';
import "./index.css"
import { Layout, Menu } from 'antd';
import BackImage from './logo1.jpg'

import Home from '../../components/home/home';
import Answer from '../../components/answer/answer'
import Allocation from '../../components/allocation/allocation'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

export default function SiderDemo() {
  
  const [state, setState] = useState({
      collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
    return ( 
      <Layout>
        
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo">知识竞赛</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label:<Link to="/home">首页</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label:<Link to="/answer">答题</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label:<Link to="/allocation">配置</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
        {/* 头部标签 */}
          <Header className="headers" style={{ padding: 0,height:110, backgroundImage:`url(${BackImage})`}}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          {/* 内容区域 */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 0 0 16px',
              padding:'10px 2px 0 10px',
              minHeight:280,
            }}>
          <Routes>
            <Route path="/" element={<Navigate  to="/home" />}></Route>
            <Route  exact path="/home" element={<Home />}></Route>
            <Route path="/answer" element={<Answer />}></Route>
            <Route path="/Allocation" element={<Allocation />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }