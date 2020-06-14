import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, RocketOutlined, DashboardOutlined, AntCloudOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import Drones from "./pages/Drones";
import Members from "./pages/Members";
import DroneDetail from './pages/DroneDetail'

import './App.css';

const { SubMenu } = Menu;
const { Header, Sider, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo"><h1><Link to="/" style={{ color: 'white' }}>HEDSPI</Link></h1></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['hi08']}>
              <SubMenu key="hi08" title="HI_08">
                <Menu.Item key="hi08-dashboard"><Link to="/hi08">Dashboard</Link></Menu.Item>
                <Menu.Item key="hi08-location"><Link to="/hi08/location">Location</Link></Menu.Item>
                <Menu.Item key="hi08-drones"><Link to="/hi08/drones">Drones</Link></Menu.Item>
                <Menu.Item key="hi08-members"><Link to="/hi08/members">Members</Link></Menu.Item>
                <Menu.Item key="hi08-statistic">Statistic</Menu.Item>
              </SubMenu>
              <Menu.Item key="hi01">HI_01</Menu.Item>
              <Menu.Item key="hi02">HI_02</Menu.Item>
              <Menu.Item key="hi03">HI_03</Menu.Item>
              <Menu.Item key="hi04">HI_04</Menu.Item>
              <Menu.Item key="hi05">HI_05</Menu.Item>
              <Menu.Item key="hi06">HI_06</Menu.Item>
              <Menu.Item key="hi07">HI_07</Menu.Item>
              <Menu.Item key="hi09">HI_09</Menu.Item>
              <Menu.Item key="hi10">HI_10</Menu.Item>
            </Menu>
          </Header>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/hi08">
              <Layout>
                <Sider width={200} className="site-layout-background">
                  <Menu mode="inline" defaultSelectedKeys={['dashboard']} defaultOpenKeys={['dashboard']} style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}><Link to="/hi08">Dashboard</Link></Menu.Item>
                    <Menu.Item key="location" icon={<AntCloudOutlined />}><Link to="/hi08/location">Location</Link></Menu.Item>
                    <SubMenu key="drones" icon={<RocketOutlined />} title="Drones">
                      <Menu.Item key="drones-all"><Link to="/hi08/drones">All</Link></Menu.Item>
                      <Menu.Item key="drones-fight">In the Fights</Menu.Item>
                      <Menu.Item key="drones-bucket">In Bucket</Menu.Item>
                      <Menu.Item key="drones-maintance">Maintaining</Menu.Item>
                    </SubMenu>
                    <SubMenu key="members" icon={<TeamOutlined />} title="Members">
                      <Menu.Item key="members-all"><Link to="/hi08/members">All</Link></Menu.Item>
                      <Menu.Item key="members-working">Networking</Menu.Item>
                      <Menu.Item key="members-management">Management</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Route exact path="/hi08">
                    <Dashboard />
                  </Route>
                  <Route exact path="/hi08/location">
                    <Location />
                  </Route>
                  <Route exact path="/hi08/drones">
                    <Drones />
                  </Route>
                  <Route exact path="/hi08/drones/:droneID"  render={(props) => <DroneDetail {...props}/>}>
                  </Route>
                  <Route exact path="/hi08/members">
                    <Members />
                  </Route>                  
                </Layout>
              </Layout>
            </Route>
          </Switch>

          <Footer style={{ textAlign: 'center' }}>©Design Team: HI_08</Footer>
        </Layout>
      </Router>

    );
  }
}


export default App;