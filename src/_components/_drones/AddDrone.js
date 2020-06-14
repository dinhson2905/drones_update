import React, { Component } from 'react';
import { Modal, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import FormDrone from './FormDrone'
class AddDrone extends Component {
    state = {
        visible: false,
    }

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
            <div>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    size="large"
                    className="fixedbutton"
                    onClick={this.showModal}
                >
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                  <FormDrone id = {this.props.id} turnOf = {this.handleCancel} addDrone = {this.props.addDrone} />
                </Modal>
            </div>
        );
    }
}

export default AddDrone;