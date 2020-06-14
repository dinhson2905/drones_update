import React, { Component } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


class FormDrone extends Component {
    state = {
        id: "",
        name: "",
        type: "",
        size: "",
        engines: "",
        number_rotors: "",
        payload_weight: "",
        flight_time: "",
        max_data_link_range: "",
        power_supply: "",
        avatar: ""
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    handleChangeEngines = (e) => {
        this.setState({
            engines: e.target.value
        })
    }

    handleChangeNumberRotors = (e) => {
        this.setState({
            number_rotors: e.target.value
        })
    }

    handleChangePayloadWeight = (e) => {
        this.setState({
            payload_weight: e.target.value
        })
    }

    handleChangeFlightTime = (e) => {
        this.setState({
            flight_time: e.target.value
        })
    }

    handleChangeMaxDataLinkRange = (e) => {
        this.setState({
            max_data_link_range: e.target.value
        })
    }

    handleChangePowerSupply = (e) => {
        this.setState({
            power_supply: e.target.value
        })
    }

    handleChangeAvatar = (e) => {
        this.setState({
            avatar: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const drone = {
            id: this.props.id,
            name: this.state.name,
            type: this.state.type,
            size: this.state.size,
            engines: this.state.engines,
            number_rotors: this.state.number_rotors,
            flight_time: this.state.flight_time,
            max_data_link_range: this.max_data_link_range,
            power_supply: this.power_supply,
            payload_weight: this.payload_weight,
            avatar: this.state.avatar,
            createdAt: "2/6/2020"
        };

        axios.post(`https://5ecdcfb77c528e00167cd7e5.mockapi.io/api/drones`, drone)
            .then((res) => {
                // alert("success")
                this.props.addDrone(drone)
                notification.open({
                    type: 'success',
                    message: 'Success',
                    description: 'add drone success!',
                    duration: 2
                });
                // this.props.turnOf()
            })
            .catch((err)=>{
                // alert("failed")
                notification.open({
                    type: 'error',
                    message: 'Add drone failed',
                    description: 'Please try again',
                    duration: 2
                });
            })
    }

    render() {
        return (
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input onChange={this.handleChangeName}/>
                </Form.Item>
                <Form.Item name="type" label="Type" >
                   <Input onChange={this.handleChangeType} />
                </Form.Item>

                <Form.Item name="size" label="Size" >
                   <Input onChange={this.handleChangeSize} />
                </Form.Item>

                <Form.Item name="engines" label="Engines" >
                   <Input onChange={this.handleChangeEngines}/>
                </Form.Item>

                <Form.Item name="numofrotors" label="Number of rotors">
                   <Input onChange={this.handleChangeNumberRotors}/>
                </Form.Item>

                <Form.Item name="payweight" label="Pay weights" >
                   <Input onChange={this.handleChangePayloadWeight}/>
                </Form.Item>

                <Form.Item name="flight" label="Flight time">
                   <Input onChange={this.handleChangeFlightTime} />
                </Form.Item>


                <Form.Item name="maxdata" label="Max data range link" >
                   <Input onChange={this.handleChangeMaxDataLinkRange }/>
                </Form.Item>


                <Form.Item name="power" label="Power supply" >
                   <Input onChange={this.handleChangePowerSupply}/>
                </Form.Item>


                <Form.Item name="image" label="Image link" >
                   <Input onChange={this.handleChangeAvatar} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick = {this.handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default FormDrone;

