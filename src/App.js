import React, { Component } from 'react'
import './App.css';
import { yes, no } from './objects.js';

// The DOM should first display the `no-image` and `no-statement` an `img` tag and `h1` tag

// When the image is clicked, it should switch to the `yes-image` and `yes-statement`

// When the image is clicked a second time it should flip back
class App extends Component {

state = {
  clicked: false,
}

clickHandler = () => {
  this.setState( {
    clicked: !this.state.clicked
  })
}

  render() {
    return (
      <div>
        {this.state.clicked ? <h1> {yes["yes-statement"]}</h1>: <h1> {no["no-statement"]} </h1>}
        <img onClick={() => this.clickHandler()} alt={"Drake"} src={this.state.clicked ? yes["yes-image"]: no["no-image"]} />
      </div>
    )
  }
}

export default App;