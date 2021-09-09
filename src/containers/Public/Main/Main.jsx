import React, {useContext}  from 'react';
import { Context } from '../context';
import { Button, Input } from 'antd'
import { AimOutlined,  FireOutlined } from '@ant-design/icons';


const {TextArea} = Input

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
      
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

      <div className="content">
        <Input 
         type="text" 
         ref={this.textInput} 
         value={this.state.value} 
         onChange={this.handleChange}
         style={{width: 280}}
         />
        <Button 
          type="primary" 
          size="middle" 
          icon={<AimOutlined/>} 
          onClick={this.focusTextInput}>
            Focus
        </Button>
        <Button 
          type="primary" 
          size="middle" 
          icon={<FireOutlined/>} 
          onClick={this.handleClick}>
            Alert
        </Button>
      </div>
      )
    }

}



export default Main