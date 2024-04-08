import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import queryString from 'query-string';

export const fetchFilms = createAsyncThunk("users/fetchFilms", async (page, thunkAPI) => {
  try {
    const queryParams = queryString.stringify({ page });
    const response = await axios.get(`/films?${queryParams}`);

    const paramsObj = queryString.parse(queryParams);
    
    const params = new URLSearchParams(window.location.search);
    params.set("page", paramsObj.page);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);

    return { data: response.data, params: queryParams };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
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
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.data = [];
      })
      .addCase(fetchFilms.pending, (state) => {
        state.data = [];
      });
  },
});
export const { updatePinnedItems } = movieSlice.actions;

export default movieSlice.reducer;
