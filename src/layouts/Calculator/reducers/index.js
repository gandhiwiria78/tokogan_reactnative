import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import formReducer from './formReducer.js';
import todoReducer from './Todo.Reducer';

//mengabungkan state jadi tinggal panggil misalnua state.form.isloginsukses
//semua state tersebut bisa diakses loh semua komponen
const allReducers= combineReducers({
  //form: formReducer,
  //count: countReducer,
  todo: todoReducer
});
export default allReducers;