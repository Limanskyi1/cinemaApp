import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue : '', 
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onChangeValue(state,action){
            state.searchValue = action.payload;
        },
        resetValue(state){
            state.searchValue = '';
        }
    },
  });
  export const { onChangeValue ,resetValue  } = searchSlice.actions;
  
  export default searchSlice.reducer;