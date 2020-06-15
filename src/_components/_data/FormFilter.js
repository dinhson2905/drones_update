import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
} from 'antd';

const { Search } = Input;

class FormFilter extends Component {

    render() {
        return (
            <div>
                <Form
                    wrapperCol={{
                        span: 20,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: 'small',
                    }}
                >
                    <Form.Item>
                        <Search placeholder="Fight ID" onSearch={value => console.log(value)} enterButton />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="Drone ID">
                            <Select.Option value="demo">Drone 1</Select.Option>
                            <Select.Option value="demo">Drone 2</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Search Image</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default FormFilter;