import React, {Component} from 'react';

//import Home from './src/layouts/frontend/Home';
// import Home from './src/layouts/Calculator/Home';
//import Home from './src/layouts/firebase/Home.js';
//import Crud from './src/layouts/firebase/crud.js';
import UploadImage from './src/layouts/firebase/UploadImage.js';
//import Home from './src/layouts/Maps/Home.js';
//import Utama from './src/layouts/navigations/Utama';
//import Home from './src/layouts/navigations/Drawer/HomeScreens/index.js';


export default class App extends Component {
  render() {
    return (
      <UploadImage />
    );
  }
}

