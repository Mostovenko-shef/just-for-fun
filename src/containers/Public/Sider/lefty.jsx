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
           
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginTop: 4, marginLeft: 4 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            </Button>
    
          <Menu
            mode="inline"
            theme="light"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <div class="sidebar">
                  <h3><NotificationOutlined />&nbsp;Search</h3>
              </div>
            </Menu.Item>  
            <Menu.Item key="2">
              <div class="sidebar">
                  <h3><LoginOutlined />&nbsp;Log in</h3>
             </div>
            </Menu.Item>
            <Menu.Item key="3">
              <div class="sidebar">
                  <h3><LoginOutlined />&nbsp;Log in</h3>
             </div>
            </Menu.Item>
            <Menu.Item key="4"> 
              <div class="sidebar">
                  <h3><LoginOutlined />&nbsp;Log in</h3>
             </div>
            </Menu.Item>
            <Menu.Item key="5">
              <div class="sidebar">
                  <h3><LoginOutlined />&nbsp;Log in</h3>
             </div>
            </Menu.Item>
            <Menu.Item key="6">
              <div class="sidebar">
                  <h3><LoginOutlined />&nbsp;Log in</h3>
             </div>
            </Menu.Item>
        </Menu>
    </div>
    )}
}

export default Lefty