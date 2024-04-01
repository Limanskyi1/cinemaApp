import { configureStore } from '@reduxjs/toolkit';
import movieReduser from "./movieSlice";
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    movies: movieReduser,
    search: searchReducer,
  },
})

export default store;