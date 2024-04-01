import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchUserById = createAsyncThunk("users/fetchByIdStatus", (page) => {
  const response = axios.get(`/films?page=${page}`).then(res => res.data).catch(err => console.log(err));
  return response;
});

const initialState = {
  data: [],
  pinnedItems: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updatePinnedItems(state){
      state.pinnedItems = JSON.parse(localStorage.getItem("pinned"));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.data = [];
      })
      .addCase(fetchUserById.pending, (state) => {
        state.data = [];
      });
  },
});
export const { updatePinnedItems } = movieSlice.actions;

export default movieSlice.reducer;
