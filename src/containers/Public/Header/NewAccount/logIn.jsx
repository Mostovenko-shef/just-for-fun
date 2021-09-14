import 'antd/dist/antd.css';
import React from 'react';
import { 
    Button,  
    Form, 
    Col, 
    Row, 
    Input
} from 'antd';

const LogIn = () => {
    return (
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>  
              <Form.Item
                name="name"
                label="Username"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Row style={{marginBottom: '8px'}}>
              <Col flex="auto" style={{textAlign: 'left'}}>  
                Password
              </Col>
              <Input.Password
                style={{ width: '100%' }}
                type='password'
              />
            </Row>
          </Form.Item>
          <Row>
            <Col span={24}>
              <Button type="primary" shape="round" className="buttonSign" block={true}>Log in</Button>
            </Col>
          </Row>
        </Form>
    )}

    export default LogIn