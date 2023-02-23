
import { createSlice } from "@reduxjs/toolkit";
const todoListReducer=createSlice({
    name:"todoList",
    initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
    ],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        toggleTodoStatus:(state,action)=>{
            state.map(todo=>todo.id===action.payload?{...todo,completed: !todo.completed}:todo)
        }
    }
})
export default todoListReducer