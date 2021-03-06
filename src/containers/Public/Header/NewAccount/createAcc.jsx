import 'antd/dist/antd.css';
import React from 'react';
import { 
    Tooltip,  
    Form, 
    Col, 
    Row, 
    Input, 
    Select, 
    InputNumber, 
    Progress,
    Button,
} from 'antd';


const { Option } = Select;

const CreateAcc = () => {
return (
<Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>  
                <Form.Item
                  name="name"
                  label="Username"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                <Tooltip 
                  placement="top" 
                  title='Под этим именем вас будут знать другие пользователи ресурса.'
                  color='#2db7f5'
                  trigger='click'
                  
                >
                  <Input placeholder="Please enter user name" />
                </Tooltip>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>

                <Row style={{marginBottom: '8px'}}>
                <Col flex="auto" style={{textAlign: 'left'}}>  
                  Password
                </Col>

                <Col flex="150px"> 
                  <Progress style={{ width: 150 }}></Progress>
                </Col>
                </Row>

                <Input.Password
                  style={{ width: '100%' }}
                  type='password'
                />

            </Form.Item>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="confirm password"
                  label="Confirm password"
                  rules={[{ required: true }]}
                >
                  <Input.Password
                    style={{ width: '100%' }}
                    type='password'
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>  
              <Col span={24}>
                <Form.Item
                  name="type"
                  label="Birthday"
                >
                  <div
                      className="registration" 
                      style={{
                          display: 'flex',
                          flexDirection: 'row',
                      }}
                  >
          
                    <InputNumber
                      style={{ width: 150 }}
                      placeholder="Day"
                      maxLength='2'
                    />
       
                    <Select placeholder="Month" style={{
                        marginLeft: 15,
                        width: "100%"
                    }}>
                      <Option>January</Option>
                      <Option>February</Option>
                      <Option>March</Option>
                      <Option>April</Option>
                      <Option>May</Option>
                      <Option>June</Option>
                      <Option>July</Option>
                      <Option>August</Option>
                      <Option>September</Option>
                      <Option>October</Option>
                      <Option>November</Option>
                      <Option>December</Option>
                    </Select>
                 
                    <InputNumber
                      style={{ 
                        width: 150,
                        marginLeft: 15,
                      }}
                      placeholder="Year"
                      maxLength='4'
                    />

                  </div>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="approver"
                  label="E-mail"
                  rules={[{ required: true, message: 'Please provide a valid email address' }]}
                >
                    <Input/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button type="primary" shape="round" className="buttonSign" block={true}>Sign up</Button>
                </Col>
            </Row>
          </Form>
)}

export default CreateAcc