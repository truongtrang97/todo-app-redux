// import {createStore} from 'redux'
// import RootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const composedEnhancers=composeWithDevTools()
// const store=createStore(RootReducer,composedEnhancers)

import { configureStore } from "@reduxjs/toolkit"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodolistSlice"

const store=configureStore({
    reducer:{
        filters: filtersReducer.reducer,
        todoList: todoListReducer.reducer
      }
})

export default store 