import 'antd/dist/antd.css';
import React, {useState} from 'react';
import { 
    Modal,
    Button,
    Select, 
    Tabs,
    Row,
    Col  
    } from 'antd';
import  { PlusOutlined } from '@ant-design/icons';
import CreateAcc from './createAcc';
import LogIn from './logIn';
import Logo from '../../../../assets/vsco (1).svg'


const { Option } = Select;
const {TabPane} = Tabs;

const Account = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
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
                    marginRight: 15,
                    float: 'right',
                    borderWidth: 2,
                    backgroundColor: 'black',
                    borderColor: 'white',
                    color: 'white'
                }}
            >
            </Button>
            </div>  
        <Modal 
          visible={isModalVisible} 
          onCancel={handleCancel}
          footer={null}
        >
          <div style={{textAlign: 'center'}}> <h2 style={{margin: 0, textAlign: 'center'}}><img src={Logo} style={{width: 80, height: 60, margin: 0}}/>&nbsp;&nbsp;Join our club</h2> </div>
          <Tabs style={{paddingTop:0}}>
          <TabPane  className="login" tab="Login" key='1'>
            <LogIn/>
          </TabPane>
          <TabPane className="signup"  tab="Create  new account " key="2">
            <CreateAcc/>
          </TabPane>
          </Tabs>
        </Modal>
      </>  
    );
}

export default Account