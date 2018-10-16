/*
Todo : Mempelajari Redux Dasar 

-Membuat pengurangan dan penambahan sederhana dengan redux
-Cek form  Login atau Tidak 
-Buat Todolist menambahakan text ke list,
*/


import React, { Component } from 'react';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import allReducers from './reducers/index.js';

//import Counter from './components/Counter.js';
//import Form from './components/Form.js';
//import Todo from './components/Todo.js';

import Calculator from './components/Calculator.js';

const store = createStore(allReducers,{},applyMiddleware(thunk,logger));

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}
