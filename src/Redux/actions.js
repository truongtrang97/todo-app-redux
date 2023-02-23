// export const addTodoAction ={
//     type: 'todoList/addTodo',// đoạn test môt tả hành động là gì  `type : tên tính năng/hành động`
//     payload:{id:3,name:'Learn JavaScript', completed:true, priority:'Low'} //thông tin người dùng đã nhập ở UI : name, chọn priority
// }

// action creators => function trả về 1 action 
//  nên dùng action creators này để viết các đoạn code không lặp đi lặp lại
//  chỉ việc gọi đến action creators
//  khi có sự thay đổi thì chỉ cần sửa lại 1 chỗ thôi còn tất cả chỗ gọi sẽ được update lại 

export const addTodo =(data) =>{
    return {
        type:'todoList/addTodo',
        payload :data
    }
}
export const searchTextFilter=(text)=>{
    return {
        type:'filter/searchTextFilter',
        payload:text
    }
}
export const toggleTodoStatus = (todoId) => {
    return {
      type: 'todoList/toggleTodoStatus',
      payload: todoId,
    };
  };

  export const statusFilterChange = (status) => {
    return {
      type: 'filters/statusFilterChange',
      payload: status,
    };
  };
  
export const priorityFilterChange = (priorities) => {
return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities,
}}