import React from 'react';
import './App.css';
import { yes, no } from './objects.js';

// - The DOM should first display the `no-image` and `no-statement` an `img` tag and `h1` tag
function App() {
  return (
    <div>
      <h1 onClick={yes["yes-statement"]}> {no["no-statement"]} </h1>;
      <img className="Drizzy" alt="Drake" src={no["no-image"]} onClick={yes["yes-image"]} />
    </div>
  )
}

export default App;

// - When the image is clicked, it should switch to the `yes-image` and `yes-statement`
// - When the image is clicked a second time it should flip back

// You are given an `App.js` file, an `objects.js` file which exports the two objects mentioned above, and a `state-basic-assessment-wireframe` file which has your wireframe. Use all the tools you have learned to build this app in the way you feel is best. CSS is not mandatory but should be worked on if you have time remaining

// - You can run `npm run lab` to run tests but use a combination of TDD and BDD to verify functionality
// - You can run `npm submit` to easily save and push up your work
