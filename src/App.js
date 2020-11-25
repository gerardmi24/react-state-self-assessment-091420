import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects.js'

class App extends Component {

state = {
  clicked: false
}

clickHandler = () => {
  this.setState = {
    clicked: !this.state.clicked
  }
}

  render() {
    let isClicked = this.state.clicked
    return (
    <div>
      <h1> {no["no-statement"]} </h1>;
      {isClicked?  <img onClick={this.clickHandler} src={yes["yes-image"]} />:
       <img onClick={this.clickHandler} src={no["no-image"]} />
      }
    </div>
    )
  }
}

export default App;
