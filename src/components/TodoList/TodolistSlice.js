
// const TodoListReducers = (state=initState,action)=>{
//     console.log("action.payload:", action.payload)
//     const prev = () => {
//         console.log("abc")
//         const state2 = [
//                 ...state,
//                 action.payload
//         ]
//     console.log('state2 :', state2)
//     return state2
//     }
//    
//         default:
//             return state;
//         }
// }

// export default TodoListReducers;

const initState = [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
  ];
  
  const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
        return [...state, action.payload];
        case 'todoList/toggleTodoStatus':
            return state.map((todo) =>
                todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
            );
        default:
            return state;
        }
      };
      
      export default todoListReducer;