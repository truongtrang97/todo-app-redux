
// import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodolistSlice"
    // const RootReducer =(state={},action)=>{
    // return {
    //     filters: FilterReducers(state.filters,action),
    //     TodoList: TodoListReducers(state.todoList,action)
    // }
    // } 

const RootReducer= configureStore({
    reducer:{
      filters: filtersReducer,
      todoList: todoListReducer
    }
})
export default RootReducer