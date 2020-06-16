import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, RocketOutlined, DashboardOutlined, AntCloudOutlined } from '@ant-design/icons';
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
              <SubMenu key='drone-control'title="Drone Control">
                <Menu.Item key='payload-control'><Link to="">Payload Control</Link></Menu.Item>
                <Menu.Item key='autoflight-setup'><Link to="">Auto-flight Setup</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="drone-management" title="Drone Management">
                <Menu.Item ><Link to="/drone-management">Dashboard</Link></Menu.Item>
                <Menu.Item ><Link to="">Flight Data</Link></Menu.Item>
                <Menu.Item ><Link to="">Flight Itinerary</Link></Menu.Item>
                <Menu.Item ><Link to="">Risk Warning</Link></Menu.Item>
                <Menu.Item ><Link to="/drone-management/drones">Drones</Link></Menu.Item>
                <Menu.Item ><Link to="/drone-management/members">Crew Members</Link></Menu.Item>
                <Menu.Item ><Link to="/drone-management/location">Location</Link></Menu.Item>
              </SubMenu>
              <SubMenu title="Risk Analysis">
                <Menu.Item ><Link to="">Electricity Grid Components List</Link></Menu.Item>
                <Menu.Item ><Link to="">Potential Risks List</Link></Menu.Item>
                <Menu.Item ><Link to="">Report And Examination Request</Link></Menu.Item>
                <Menu.Item ><Link to="">Incident Analysis Management</Link></Menu.Item>
              </SubMenu> 
              <SubMenu title="Central Monitoring">
                <Menu.Item ><Link to="https://hi02-qlgs-foradmin.web.app/alert">Electricity Grid Components Management</Link></Menu.Item>
                <Menu.Item ><Link to="https://hi02-qlgs-foradmin.web.app/checklist">Report Receive</Link></Menu.Item>
                <Menu.Item ><Link to="https://hi02-qlgs-foradmin.web.app/checklist">Examination List</Link></Menu.Item>
                <Menu.Item ><Link to="https://hi02-qlgs-foradmin.web.app/addcheck">Examination Creation</Link></Menu.Item>
              </SubMenu>
              <SubMenu title="Examination Report">
                <Menu.Item ><Link to="">Synthesis Report</Link></Menu.Item>
                <Menu.Item ><Link to="">Examination Report Creation</Link></Menu.Item>
              </SubMenu> 
              <SubMenu title="Construction Supervision">
                <Menu.Item ><Link to="https://hi01-efd.web.app/construction-list">Construction List</Link></Menu.Item>
                <Menu.Item ><Link to="https://hi01-efd.web.app/construction-add">Construction Creation</Link></Menu.Item>
                <Menu.Item ><Link to="https://hi01-efd.web.app/choose-report">Progress Report</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/drone-management">
              <Layout>
                <Sider width={200} className="site-layout-background">
                  <Menu mode="inline" defaultSelectedKeys={['dashboard']} defaultOpenKeys={['dashboard']} style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}><Link to="/drone-management">Dashboard</Link></Menu.Item>
                    <Menu.Item key="location" icon={<AntCloudOutlined />}><Link to="/drone-management/location">Location</Link></Menu.Item>
                    <SubMenu key="drones" icon={<RocketOutlined />} title="Drones">
                      <Menu.Item key="drones-all"><Link to="/drone-management/drones">All</Link></Menu.Item>
                      <Menu.Item key="drones-fight"><Link to="/drone-management/drones/active">In the Fights</Link></Menu.Item>
                      <Menu.Item key="drones-bucket"><Link to="/drone-management/drones/bucket">In the Bucket</Link></Menu.Item>
                      <Menu.Item key="drones-maintance"><Link to="/drone-management/mantaining">Mantaining</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="members" icon={<TeamOutlined />}><Link to="/drone-management/members">Crew Members</Link></Menu.Item>
                  </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Route exact path="/drone-management">
                    <Dashboard />
                  </Route>
                  <Route exact path="/drone-management/location">
                    <Location />
                  </Route>
                  <Route exact path="/drone-management/drones">
                    <Drones />
                  </Route>
                  <Route exact path="/drone-management/drones/active">
                    <DroneActive />
                  </Route>
                  <Route exact path="/drone-management/drones/bucket">
                    <DroneBucket />
                  </Route>
                  <Route exact path="/drone-management/drones/mantaining">
                    <DroneMaintaining />
                  </Route>
                  <Route exact path="/drone-management/drones/:droneID"  render={(props) => <DroneDetail {...props}/>}>
                  </Route>
                  <Route exact path="/drone-management/members">
                    <Members />
                  </Route>
		  <Route exact path="/drone-management/members/profile/:id">
                    <MemberProfile />
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