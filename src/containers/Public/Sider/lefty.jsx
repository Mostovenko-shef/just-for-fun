import React from 'react';
import { Menu, Button } from 'antd';
import { NotificationOutlined, LoginOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';


class Lefty extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
  };
    render() {
    return (    
    <div className="sidecontent">
            <div className="buttonTop">
            <Button type="primary" onClick={this.toggleCollapsed} style={{  }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            </Button>
          </div>
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