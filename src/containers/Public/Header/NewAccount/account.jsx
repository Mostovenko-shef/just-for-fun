import 'antd/dist/antd.css';
import React, {useState} from 'react';
import { 
    Modal,  
    Form, 
    Button, 
    Col, 
    Row, 
    Input, 
    Select, 
    InputNumber, 
    Progress  } from 'antd';
import  { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const Account = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
      <>
        <div className="right-btn">
            <Button 
                type="default" 
                onClick={showModal} 
                shape="circle" 
                icon={<PlusOutlined />}
                style={{
                    marginTop: 17,
                    float: 'right'
                }}
            >
            </Button>
        </div>
        <Modal 
          title="Join our club"
          style={{
              textAlign: 'center'
          }} 
          onOk={handleOk} 
          visible={isModalVisible} 
          onCancel={handleCancel}
        >
          
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
            <Row>  
              <Col span={24}>
                <Row>
                <Col span={24}>     
                <Form.Item
                  name="password"
                  label="Password"
                  
                >
                <Progress
                style={{
                    width: 200
                }}/>
                </Form.Item>
                </Col>
                </Row>
                  <Input.Password

                    style={{ width: '100%' }}
                    type='password'
                  />
                
              </Col>
            </Row>
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
          </Form>
        </Modal>
      </>
    );
}

export default Account