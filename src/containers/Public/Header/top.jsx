import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import {Menu, Button} from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons';
import Account from './NewAccount/account';
import Logo from '../../../assets/vsco.svg'


class Top extends React.Component {
  render () {
    return(
            <Menu mode="horizontal" style={{backgroundColor:'black'}}>
              <div style={{ display: 'flex', flexDirection:'row'}}>
              <img src={Logo} style={{height: 60, marginLeft:0, marginRight:20, width: 100}}/>
              <div><h2><Menu.Item><Link  style={{color: 'whitesmoke'}} to="/">Main</Link></Menu.Item></h2></div>
              <div><h2><Menu.Item><Link  style={{color: 'whitesmoke'}} to="/second">Second</Link></Menu.Item></h2></div>
              </div>
              <Account />
              
            </Menu>
    )
  }
}

export default Top