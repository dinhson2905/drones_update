import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, RocketOutlined, DashboardOutlined, AntCloudOutlined, BarChartOutlined, WechatOutlined, SolutionOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import Drones from "./pages/Drones";
import Members from "./pages/Members";
import DroneDetail from './pages/DroneDetail';
import DroneMaintaining from './pages/DroneMaintaining';
import DroneActive from './pages/DroneActive';
import DroneBucket from './pages/DroneBucket';
import MemberProfile from "./_components/_member/MemberProfile";
import AboutUs from './pages/AboutUs'
import './App.css';
import Data from './pages/Data';

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
                      <Menu.Item key="drones-fight"><Link to="/hi08/drones/active">In the Fights</Link></Menu.Item>
                      <Menu.Item key="drones-bucket"><Link to="/hi08/drones/bucket">In the Bucket</Link></Menu.Item>
                      <Menu.Item key="drones-maintance"><Link to="/hi08/drones/mantaining">Mantaining</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="members" icon={<TeamOutlined />}><Link to="/hi08/members">Members</Link></Menu.Item>
                    <Menu.Item key="data-analy" icon={<BarChartOutlined />}><Link to="/hi08/data-analy">Raw Data Analysis</Link></Menu.Item>
                    <Menu.Item key="about-us" icon={<SolutionOutlined />}><Link to="/hi08/aboutus">About us</Link></Menu.Item>
                    <Menu.Item key="about-us" icon={<WechatOutlined />}>Help</Menu.Item>
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
                  <Route exact path="/hi08/drones/active">
                    <DroneActive />
                  </Route>
                  <Route exact path="/hi08/drones/bucket">
                    <DroneBucket />
                  </Route>
                  <Route exact path="/hi08/drones/mantaining">
                    <DroneMaintaining />
                  </Route>
                  <Route exact path="/hi08/drones/:droneID"  render={(props) => <DroneDetail {...props}/>}>
                  </Route>
                  <Route exact path="/hi08/members">
                    <Members />
                  </Route>
		              <Route exact path="/hi08/members/profile/:id">
                    <MemberProfile />
                  </Route>
                  <Route exact path="/hi08/data-analy" component={Data}/>
                  <Route exact path="/hi08/aboutus" component={AboutUs}/>
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