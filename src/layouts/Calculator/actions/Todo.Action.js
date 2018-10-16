export const ADD_TODO ='ADD_TODO';
export const FETCH_TODO ='FETCH_TODO';

export const addTodo=(newTodo)=>{
    return {
        'type': ADD_TODO,
         payload: newTodo
    }
}
export const fetch_todo=()=>{
    return {
        'type': FETCH_TODO,
    }
}