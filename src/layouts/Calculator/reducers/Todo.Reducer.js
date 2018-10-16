import {ADD_TODO} from '../actions';

const initialState ={
    todolist:[],
};
//seharusnya disini tempat penambahan array,
export default function(state=initialState, action){ 
    switch(action.type){
        case ADD_TODO:
            initialState.todolist.push(action.payload)
            return{
                todolist:initialState.todolist
            }
        
    }
    return initialState;
}