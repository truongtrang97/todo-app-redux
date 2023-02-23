// const initState={
//     filter:{
//      search:'',
//      status:'All',
//      priority:[]
//     },
//     todoList:[
//     {id:1,name:'Learn Yoga', completed:false, priority:'Medium'},
//     {id:2,name:'Learn Redux', completed:true, priority:'High'},
//     {id:3,name:'Learn JavaScript', completed:true, priority:'Low'}
//     ]
//     // mỗi thành phần trong array tượng trưng cho 1 việc cần làm
// }
// const RootReducer = (state=initState,action)=>{
//     console.log("action.payload:", action.payload)
//     const prev = () => {
//         console.log("abc")



//         const state2 = {
    //           ...state,
    //             todoList:[
        //                 ...state.todoList,
        //                 action.payload
        //         ]
        //     }
//     console.log('state2 :', state2)
//     return state2
    
//     }
//     console.log(action.type)
//     switch(action.type) {
    //         case 'todoList/addTodo':
    //         console.log('ghsf')
    //         return prev()
    //         case 'filter/searchTextFilter':
    //             return{
        //                 ...state,
        //                 filter:{
            //                     ...state,
            //                     search:action.payload
            //                 }
            //             }
            //         default:
            //             return state;
            //         }
            // }
            
            // export default RootReducer;
            //  chia nhỏ ra nhiều tính năng để dễ dàng quản lý 
            
            // tạo ra 2 file filterReducer và TodolistReducer 
            //  THỰC HIỆN split reducer <chia thành các phần nhỏ>
            
import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodolistSlice"
    // const RootReducer =(state={},action)=>{
    // return {
    //     filters: FilterReducers(state.filters,action),
    //     TodoList: TodoListReducers(state.todoList,action)
    // }
    // } 

const RootReducer= combineReducers({
    filters: filtersReducer,
  todoList: todoListReducer,
})
export default RootReducer