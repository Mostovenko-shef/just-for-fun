import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../App.css'
import Top from './Public/Header/top'
import Lefty from './Public/Sider/lefty'
import Main from './Public/Main/Main'
import Second from './Public/Second/second'
import Account from './Public/Header/NewAccount/account'
import { Layout, Button } from 'antd';

const { Header, Content, Sider } = Layout;

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    };
    
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    focusTextInput() {
      this.textInput.current.focus();
    }
      
    handleChange(event) {
      this.setState({value: event.target.value});
    }
       
    handleClick(event) {
      alert(!this.state.value.length ? 'Поле для ввода пустое.' : this.state.value);
      event.preventDefault();
    }
    
    render() {
      return (
    
        // <Router>
        // <Layout>
        // <div>
        //     <Header>
        //       <Top />
        //       <Switch>
        //         <Route exact path="/" component={Main} />
        //         <Route exact path="/second" component={Second} />
        //       </Switch>
        //     </Header>

        //     <Layout>  
        //     {/* <div style={{ display: 'flex' }}> */}
        //       <Sider>
        //         <Lefty/>
        //       </Sider>
        //     </Layout>
        //     <Content>
        //     {/* <Switch>
        //         <Route exact path="/" component={Main} />
        //         <Route exact path="/second" component={Second} />
        //     </Switch> */}
        //     </Content>
        //     {/* </div> */}
        // </div>
        // </Layout>
        // </Router>
      <Router>
        <Layout>
            <Sider 
              width={200} 
              height={1000} 
              className="site-layout-background"
              trigger={null} 
              collapsible 
            >
              <Lefty inlineCollapsed={this.state.collapsed}/>
            </Sider>
          {/* <Header className="site-layout-background" style={{ padding: 0, theme: "light" }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
           <Top/>
          </Header> */}
          <Layout>
            <Header className="site-layout-background" style={{ padding: 0, theme: "dark" }}>
              <Top/>
            </Header>
            {/* <Sider 
              width={200} 
              height={1000} 
              className="site-layout-background"
              trigger={null} 
              collapsible 
            >
              <Lefty collapsed={this.state.collapsed}/>
            </Sider> */}
              <Content           
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 1080,
                }}
              >
                <Switch>
                 <Route exact path="/" component={Second} />
                 <Route exact path="/second" component={Main} />
                 <Route exact path="/newacc" component={Account} />
               </Switch> 
              </Content>
          </Layout>
        </Layout>
      </Router>    
      )}
}

export default App