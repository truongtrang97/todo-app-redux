import { createSlice } from "@reduxjs/toolkit";

  const filtersReducer = createSlice({
    name: 'filters',
    initialState:{
      search: '',
    status: 'All',
    priorities: [],
    },
    reducers:{
      searchTextFilter:(state,action)=>{
        state.search=action.payload
      },
      statusFilterChange:(state,action)=>{
        state.status=action.payload
      },
      prioritiesFilterChange:(state,action)=>{
        state.priorities=action.payload
      }

    }
  })
  export default filtersReducer
  
 
  