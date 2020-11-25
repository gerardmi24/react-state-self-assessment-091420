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
    console.log("State:", this.state, "Props:", this.props)
    return (
    <div>
      {isClicked? <div> <h1> {yes["yes-statement"]} </h1> <img alt="Drake" onClick={this.clickHandler} src={yes["yes-image"]} /> </div>:
       <div> <h1> {no["no-statement"]} </h1> <img alt="Drake" onClick={this.clickHandler} src={no["no-image"]} /> </div>
      }
    </div>
    )
  }
}

export default App;

//create two components (image and statement) - rcc
//pass down as props in the image={the ternary but with yes or no image based on if clicked is true/false}
//pass down as props in the statement={the ternary but with yes or no statement based on if clicked is true/false}
//the image file will be passed the clickHandler

