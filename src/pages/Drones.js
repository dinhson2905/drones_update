import React, { Component } from 'react';
import { Layout, Breadcrumb, List, Pagination, Input, PageHeader, Descriptions } from 'antd';
import Axios from 'axios';
import DroneCard from '../_components/DroneCard';
import AddDrone from '../_components/_drones/AddDrone.js'

const { Search } = Input;
const { Content } = Layout;

class Drones extends Component {
    state = {
        drones: [],
        searchText: '',
        minValue: 0,
        maxValue: 9,
    }

    componentDidMount() {
        Axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones`)
        .then(response => {
            const drones = response.data;
            this.setState({ drones: drones });
        })
        .catch(err => console.log(err));
    }

    handleChange = value => {
        this.setState({ 
            minValue: (value - 1) * 9,
            maxValue: value * 9
         });
    }

    enterDroneName = (value) => {
        this.setState({ searchText: value });
    }

    addDrone = (newdrone) =>{
        this.state.drones.push(newdrone)
    }

    renderDrones = () => {
        var drones = [];
        if (this.state.searchText !== "") {
            drones = this.state.drones.filter(data => {
                if(data.name.toLowerCase().includes(this.state.searchText.toLowerCase())) return data;
                else return null;
            })
        } else drones = this.state.drones;

        return (
            <div>
                <List
                    grid={{ gutter: 5, column: 3 }}
                    dataSource={drones.slice(this.state.minValue, this.state.maxValue)}
                    renderItem={drone => (
                    <List.Item>
                        <DroneCard drone={drone} />
                    </List.Item>
                    )}
                />
                <Pagination total={50} defaultPageSize={9} onChange={this.handleChange}/>
            </div>
        ) 
    }
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Drone Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Drones</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}
                >
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            title="Drones List"
                            subTitle=""
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Total Drone">100</Descriptions.Item>
                                <Descriptions.Item label="Location Time">2020-06-10</Descriptions.Item>
                                <Descriptions.Item label="Remarks">
                                    Đại Học Bách Khoa Hà Nội
                                </Descriptions.Item>
                                <Descriptions.Item label="In progress">20</Descriptions.Item>
                                <Descriptions.Item label="In the bucket">50</Descriptions.Item>
                                <Descriptions.Item label="Maintaining">30</Descriptions.Item>
                                
                            </Descriptions>
                        </PageHeader>
                    </div>
                    <br />
                    <br />
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => this.enterDroneName(value)}
                    />
                    <br />
                    <br />
                    <div>{this.renderDrones()}</div>
                </Content>
                <AddDrone id = {this.state.drones.length+1} addDrone = {this.addDrone} />
            </div>
        );
    }
}

export default Drones;