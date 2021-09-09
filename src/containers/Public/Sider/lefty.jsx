import React from 'react';
import { Menu } from 'antd';
import { NotificationOutlined, LoginOutlined } from '@ant-design/icons';


class Lefty extends React.Component {
    render() {
    return (    
    <div className="sidecontent">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
          >
            <Menu.Item>
              <div class="sidebar">
                  <h3><NotificationOutlined />&nbsp;Search</h3>
              </div>
            </Menu.Item>  
            <Menu.Item>
              <div class="sidebar">
                  <h3><LoginOutlined />&nbsp;Log in</h3>
             </div>
            </Menu.Item>
        </Menu>
    </div>
    )}
}

export default Lefty