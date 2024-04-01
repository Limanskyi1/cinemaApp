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
        }
    },
  });
  export const { onChangeValue } = searchSlice.actions;
  
  export default searchSlice.reducer;