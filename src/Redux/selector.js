// export const todolistSelector = (state)=>{
//     const searchText =searchTextSeclector(state)
//     return state.todoList.filters(todo=>todo.name.includes(searchText))
// }
// export const searchTextSeclector=(state=>state.filters.search)

// import { createSelector } from "selector"
// export const todolistSelector =state=>state.todoList
// export const searchFilterSeclector=state=>state.filters.search

// export const todoRemainingSeclector=createSelector(todolistSelector,searchFilterSeclector,(todoList,searchText)=>{
//     return todoList.filter(todo=>todo.name.includes(searchText))

// })

import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  })