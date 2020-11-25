import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects.js'

class App extends Component {

state = {
  clicked: false
}

clickHandler = () => {
  this.setState( {
    clicked: !this.state.clicked
  })
}

  render() {
    let isClicked = this.state.clicked
    return (
    <div>
      
      {isClicked? <div> <h1> {yes["yes-statement"]} </h1> <img onClick={this.clickHandler} src={yes["yes-image"]} /> </div>:
       <div> <h1> {no["no-statement"]} </h1> <img onClick={this.clickHandler} src={no["no-image"]} /> </div>
      }
    </div>
    )
  }
}

export default App;
