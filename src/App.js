import React from "react";
import Keypad from './Keypad';
import Output from './Output'


export default class App extends React.Component{
  state={
  result: ""
  }
  
    buttonPressed = buttonName => {
  if (buttonName === '='){
    this.calculate();
  } else if (buttonName === 'C') {
      this.reset();
  } else if(buttonName ==='CE') {
  this.backspace();
  }else {
      this.setState({
        result: this.state.result + buttonName
      })
      }
    }
    calculate = () => {
      try {
        this.setState({
          result: eval(this.state.result)
          })
      } catch (e) {
        this.setState({
          result: 'invalid'
        })
      }
  
    }
  
    reset = () => {
  this.setState({
    result: ''
  })
    }
  backspace = () => {
    this.setState({
  result: this.state.result.slice(0, -1)
    })
  
  }
    render(){
      return(
  <div className="App">
        <div className="calc">
          <h1> Calculator</h1>
        <Output result={this.state.result} />
        <Keypad buttonPressed={this.buttonPressed}/>
       
      </div>
      </div>
      )
    }
  }
  