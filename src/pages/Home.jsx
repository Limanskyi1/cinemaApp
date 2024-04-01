import React, { useState } from "react";
import { Sidebar } from "../components/SideBar";
import { Search } from "../components/Search";
import { Pagination } from "../components/Pagination";
import { MovieList } from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const { items } = useSelector((state) => state.movies.data);
  const {searchValue} = useSelector(state => state.search);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        await dispatch(fetchUserById(page));
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [page]);

  

  return (
    <div className="app">
      <Sidebar />
      <div>
        <div className="d-flex flex-between">
          <Search />
          <Pagination setPage={setPage} currentPage={page} />
        </div>
        <MovieList
          items={items}
          load={load}
          setPage={setPage}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};
