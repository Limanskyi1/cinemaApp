import React from 'react';
import { Sidebar } from '../components/SideBar';
import { Search } from '../components/Search';
import { Movie } from '../components/Movie';
import { useSelector } from 'react-redux';
import { filterItems } from "../utils/filterByName";

export const BookMarked = () => {
  const items = JSON.parse(localStorage.getItem("pinned")) || [];
  const {searchValue} = useSelector(state => state.search);
  return (
    <div className="app">
      <Sidebar />
      <div>
        <div className="d-flex flex-between">
          <Search />
        </div>
        <h1 className='title'>Bookmarked Movies</h1>
        <div className="grid-4">
          {items.length > 0 ? (
              filterItems(items ,searchValue).map((item) => <Movie {...item} key={item.kinopoiskId} />)
            ) : ''}
        </div>
      </div>
    </div>
  )
}
