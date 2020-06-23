import React, { Component } from 'react';
import { Layout, Menu, Modal, Collapse } from 'antd';
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
const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class App extends Component {
  state = { visible: false };

  showModal = () => {
      this.setState({
          visible: true,
      });
  };

  handleOk = e => {
      console.log(e);
      this.setState({
          visible: false,
      });
  };

  handleCancel = e => {
      console.log(e);
      this.setState({
          visible: false,
      });
  };

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
                <Menu.Item ><Link to="/drone-management/data-analy">Raw Data Analysis</Link></Menu.Item>
              </SubMenu>
              <SubMenu title="Risk Analysis">
                <Menu.Item ><Link to="">Electricity Grid Components List</Link></Menu.Item>
                <Menu.Item ><Link to="">Potential Risks List</Link></Menu.Item>
                <Menu.Item ><Link to="">Report And Examination Request</Link></Menu.Item>
                <Menu.Item ><Link to="">Incident Analysis Management</Link></Menu.Item>
              </SubMenu> 
              <SubMenu title="Central Monitoring">
                <Menu.Item ><Link to={{ pathname: "https://hi02-qlgs-foradmin.web.app/alert" }} target="_blank">Electricity Grid Components Management</Link></Menu.Item>
                <Menu.Item ><Link to={{ pathname: "https://hi02-qlgs-foradmin.web.app/checklist" }} target="_blank">Report Receive</Link></Menu.Item>
                <Menu.Item ><Link to={{ pathname: "https://hi02-qlgs-foradmin.web.app/checklist" }} target="_blank">Examination List</Link></Menu.Item>
                <Menu.Item ><Link to={{ pathname: "https://hi02-qlgs-foradmin.web.app/addcheck" }} target="_blank">Examination Creation</Link></Menu.Item>
              </SubMenu>
              <SubMenu title="Examination Report">
                <Menu.Item ><Link to="">Synthesis Report</Link></Menu.Item>
                <Menu.Item ><Link to="">Examination Report Creation</Link></Menu.Item>
              </SubMenu> 
              <SubMenu title="Construction Supervision">
                <Menu.Item ><Link to={{ pathname: "https://hi01-efd.web.app/construction-list" }} target="_blank">Construction List</Link></Menu.Item>
                <Menu.Item ><Link to={{ pathname: "https://hi01-efd.web.app/construction-add" }} target="_blank">Construction Creation</Link></Menu.Item>
                <Menu.Item ><Link to={{ pathname: "https://hi01-efd.web.app/choose-report"}} target="_blank">Progress Report</Link></Menu.Item>
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
                      <Menu.Item key="drones-fight"><Link to="/drone-management/drones/active">In Progress</Link></Menu.Item>
                      <Menu.Item key="drones-bucket"><Link to="/drone-management/drones/bucket">In the Bucket</Link></Menu.Item>
                      <Menu.Item key="drones-maintance"><Link to="/drone-management/drones/mantaining">Mantaining</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="members" icon={<TeamOutlined />}><Link to="/drone-management/members">Members</Link></Menu.Item>
                    <Menu.Item key="data-analy" icon={<BarChartOutlined />}><Link to="/drone-management/data-analy">Raw Data Analysis</Link></Menu.Item>
                    <Menu.Item key="about-us" icon={<SolutionOutlined />}><Link to="/drone-management/aboutus">About us</Link></Menu.Item>
                    <Menu.Item key="help" icon={<WechatOutlined />} onClick={this.showModal}>Help</Menu.Item>
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
                  <Route exact path="/drone-management/data-analy" component={Data}/>
                  <Route exact path="/drone-management/aboutus" component={AboutUs}/>
                </Layout>
              </Layout>
            </Route>
          </Switch>

          <Footer style={{ textAlign: 'center' }}>©Design Team: HI_08</Footer>
        </Layout>
        <div>
          <Modal
              title="Help"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
              <Collapse onChange={callback}>
                <Panel header="Location" key="1">
                  <ul>
                    <li><h4>View</h4>{text}</li>
                    <li><h4>Hover to drone</h4>{text}</li>
                    <li><h4>Click to drone</h4>{text}</li>
                  </ul>
                </Panel>
                <Panel header="Drones" key="2">
                  <ul>
                    <li><h4>View all</h4>{text}</li>
                    <li><h4>Search drone</h4>{text}</li>
                    <li><h4>Add drone</h4>{text}</li>
                  </ul>
                </Panel>
                <Panel header="Members" key="3">
                  <ul>
                    <li><h4>View all</h4>{text}</li>
                    <li><h4>Search member</h4>{text}</li>
                    <li><h4>Add member</h4>{text}</li>
                  </ul>
                </Panel>
                <Panel header="Raw Data Analysis" key="4">
                  <ul>
                    <li><h4>Filter Data</h4>{text}</li>
                    <li><h4>Process Data</h4>{text}</li>
                    <li><h4>Delete Data</h4>{text}</li>
                  </ul>
                </Panel>
              </Collapse>
          </Modal>
          </div>
      </Router>

    );
  }
}


export default App;