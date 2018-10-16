import React, {Component} from 'react';
//import Home from './src/layouts/frontend/Home';
// import Home from './src/layouts/Calculator/Home';
//import Home from './src/layouts/firebase/Home.js';
import Crud from './src/layouts/firebase/crud.js';
//import Home from './src/layouts/Maps/Home.js';

export default class App extends Component {
  render() {
    return (
      <Crud />
    );
  }
  
}

