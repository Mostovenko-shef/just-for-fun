import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../App.css'
import Top from './Public/Header/top'
import Lefty from './Public/Sider/lefty'
import Main from './Public/Content/Main/Main'
import Second from './Public/Content/Second/second'
import Account from './Public/Header/NewAccount/account'
import Bottom from './Public/Footer/Bottom'
import { Layout } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

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

      <Router>
        {/* <Layout>
            <Sider 
              width={200} 
              height={1000} 
              className="site-layout-background"
              trigger={null} 
              collapsible 
            >
              <Lefty inlineCollapsed={this.state.collapsed}/>
        </Sider> */}
         
          <Layout> 
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <Top/>
            </Header>
            
              <Content           
                className="site-layout-background"
                style={{
                  
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
            
              <Footer style={{padding:0, height: 101.76}}>
                <Bottom/>
              </Footer>
          </Layout>
      </Router>    
      )}
}

export default App