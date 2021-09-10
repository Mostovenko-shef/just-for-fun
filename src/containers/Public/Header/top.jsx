import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import {Menu, Button} from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons';
import Account from './NewAccount/account';
import Logo from '../../../assets/logo.svg.svg'


class Top extends React.Component {
  render () {
    return(
            <Menu mode="horizontal">
              <div style={{ display: 'flex', flexDirection:'row'}}>
              <div><h2><Menu.Item><Link to="/">Main</Link></Menu.Item></h2></div>
              <div><h2><Menu.Item><Link to="/second">Second</Link></Menu.Item></h2></div>
              </div>
              <Account/>
            </Menu>
    )
  }
}

export default Top