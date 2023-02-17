const initState={
    filter:{
     search:'',
     status:'All',
     priority:[]
    },
    todoList:[
    {id:1,name:'Learn Yoga', completed:false, priority:'Medium'},
    {id:2,name:'Learn Redux', completed:true, priority:'High'},
    {id:3,name:'Learn JavaScript', completed:true, priority:'Low'}
    ]
    // mỗi thành phần trong array tượng trưng cho 1 việc cần làm
}
const RootReducer = (state=initState,action)=>{
    console.log("action.payload:", action.payload)
    const prev = () => {
        console.log("abc")
        
        const state2 = {
          ...state,
            todoList:[
                ...state.todoList,
                action.payload
        ]
    }
    console.log('state2 :', state2)
    return state2
    
    }
    console.log(action.type)
    switch(action.type) {
        case 'todoList/addTodo':
        console.log('ghsf')
        return prev()
        
        default:
            return state;
        }
}

export default RootReducer;