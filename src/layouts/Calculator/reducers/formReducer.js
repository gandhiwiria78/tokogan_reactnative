import { LOGIN_ERROR, isloginSukses, isloginPending, isloginError, LOGIN_SUKSES, LOGIN_PENDING } from "../actions";
import Promise from 'es6-promise';

const initialState={
  isloginSukses : false,
  isloginPending: false,
  isloginError : null
}

// function untuk mengset nilai balik dari  action yang diperlukan
export const login = (email,nama) => dispatch =>{
  dispatch(isloginSukses(false));
  dispatch(isloginPending(true));
  dispatch(isloginError(null));
  
  sendLoginRequest(email,nama).then(success=>{
      dispatch(isloginPending(false));
      dispatch(isloginSukses(true));
      //console.log('Benarararararara')
    }
  ).catch(err=>{
    dispatch(isloginPending(false));
    dispatch(isloginError(err))
    //console.log('Salahahahahaha')
  })
}


export default function(state=initialState, action){
  switch(action.type){
    case LOGIN_SUKSES:
    return{
      ...state,
      isloginSukses: action.isloginSukses,
    }
    case LOGIN_PENDING:
    return{
      ...state,
      isloginPending: action.isloginPending,
    }
    case LOGIN_ERROR:
    return{
      ...state,
      isloginError: action.isloginError,
    }
  }
  return initialState;
}

//ini untuk mengecek data , karna masih belum dihubungkan ke Axios maka diganti dengan promose
function sendLoginRequest(email,nama){
  return new Promise((resolve,reject)=>{
    if(email==="Admin@admin.com" && nama ==="Gandhi"){
      return resolve(true)
    }else{
      return reject(new Error('invalid email dan nama'));
    }
  })
}