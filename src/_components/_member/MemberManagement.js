import React, { Component }from 'react';
import { Layout, Breadcrumb, Table, Space, Typography, Input, Button,Modal} from 'antd';
import axios from 'axios';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Link } from "react-router-dom";
import {Form,Select,DatePicker} from 'antd';

const { Content } = Layout;
const { Title } = Typography;
class MemberManagement extends Component {

    state = {
        members: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
        searchText: '',
        visible: false,
        searchedColumn: '',
        upload_id: '',
        upload_createdAt: '',
        upload_name: '',
        upload_avatar: '',
        upload_birthday: '',
        upload_gender: '',
        upload_chucvu: '',
        upload_bophan: ''
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
    showModal = () => {
        this.setState({
        visible: true,
    	   });
  	};
    handleChangeName = event => {
        this.setState({ upload_name: event.target.value });
    }
    handleChangeGender = event => {
        this.setState({ upload_gender: event.target.value });
    }
    handleChangeCompetence = event => {
        this.setState({ upload_chucvu: event.target.value });
    }
    handleChangeWP = event => {
        this.setState({ upload_bophan: event.target.value });
    }
    handleChangeBirthday = event => {
        this.setState({ upload_birthday: event.target.value });
    }

  	handleOk = (e) => {
        e.preventDefault();
    	this.setState({ loading: true });
    	setTimeout(() => {
      	this.setState({ loading: false, visible: false });
    	}, 3000);

        const user = {
          name: this.state.upload_name,
          gender: this.state.upload_gender,
          birthday: this.state.upload_birthday,
          bophan: this.state.upload_bophan,
          chucvu: this.state.upload_chucvu,
        };

        axios.post(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/members`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
  	};

  	handleCancel = () => {
    	this.setState({ visible: false });
  	};


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
        const { members, pagination, loading, visible } = this.state;
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
                key: 'chucvu',
                ...this.getColumnSearchProps('chucvu')
            },
            {
                title: 'Action',
                key: 'action',
                dataIndex: 'id',
                render: text => (
                    <Space size="middle">
                        <Link to={`/hi08/members/profile/${ text }`}>View</Link>
                    </Space>
                )
            }
        ];  
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>HI_08</Breadcrumb.Item>
                    <Breadcrumb.Item>Members</Breadcrumb.Item>
                    <Breadcrumb.Item>Management</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}
                >
                    <Title>Members Management</Title>
                    <Button type="primary" onClick={this.showModal}>
          				Add a member
        			</Button>
			        <Modal
                      destroyOnClose={true}
			          visible={visible}
			          title="Add a member"
			          onOk={this.handleOk}
			          onCancel={this.handleCancel}
			          footer={[
			            <Button key="back" onClick={this.handleCancel}>
			              Return
			            </Button>,
			            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk.bind(this)}>
			              Submit
			            </Button>,
			          ]}
			        >
					<Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" 
									initialValues={{ size: 'small', }} 
			        				size={'small'} id="add-user-form">
			        <Form.Item name="user_name" label="Name" onChange={this.handleChangeName}>
			          <Input />
			        </Form.Item>
			        <Form.Item label="Gender" onChange={this.handleChangeGender}>
			          <Select>
			            <Select.Option value="M">Male</Select.Option>
			            <Select.Option value="F">Female</Select.Option>
			          </Select>
			        </Form.Item>
			        <Form.Item label="Competence" onChange={this.handleChangeCompetence}>
			          <Select>
			            <Select.Option value="Commander">Commander</Select.Option>
			            <Select.Option value="Worker">Worker</Select.Option>
			          </Select>
			        </Form.Item>
			        <Form.Item label="Working Parts" onChange={this.handleChangeWP}>
			          <Select>
			            <Select.Option value="Network monitoring">Network monitoring</Select.Option>
			          </Select>
			        </Form.Item>
			        <Form.Item label="Birthday" onChange={this.handleChangeBirthday}>
			          <DatePicker />
			        </Form.Item>
			      </Form>
			        </Modal>
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


export default MemberManagement;