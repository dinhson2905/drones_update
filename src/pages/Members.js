import React, { Component } from 'react';
import { Layout, Breadcrumb, Table, Space, Typography, Input, Button} from 'antd';
import axios from 'axios';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Title } = Typography;
class Members extends Component {

    state = {
        members: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
        searchText: '',
        searchedColumn: ''
    }

    componentDidMount() {
        axios.get(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/members`)
        .then(response => {
            const members = response.data;
            this.setState({ members });
        })
        .catch(error => console.log(error));
    }

    handleTableChange = (pagination) => {
        this.setState({
            pagination: {
                ...pagination
            }
        });
    }

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({ 
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    }

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: ''});
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8}}>
                <Input 
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Select ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width:188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => this.state.selectedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />) : ( text ),
    });

    

    render() {
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                // render: text => <a>{text}</a>,
                ...this.getColumnSearchProps('name')
            },
            {
                title: 'Birthday',
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                title: 'Working Parts',
                dataIndex: 'bophan',
                key: 'bophan'
            },
            {
                title: 'Competence',
                dataIndex: 'chucvu',
                key: 'chucvu'
            },
            {
                title: 'Action',
                key: 'action',
                render: text => (
                    <Space size="middle">
                        <Link>View</Link>
                    </Space>
                )
            }
        ];
        
        const { members, pagination, loading } = this.state;
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>HI_08</Breadcrumb.Item>
                    <Breadcrumb.Item>Members</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}
                >
                    <Title>Members List</Title>
                    <Table
                        columns={columns}
                        dataSource={members}
                        pagination={pagination}
                        loading={loading}
                        onChange={this.handleTableChange}
                    />
                    
                </Content>
            </div>
        );
    }
}

export default Members;