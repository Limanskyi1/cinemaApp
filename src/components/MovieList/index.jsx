import React from "react";
import { Movie } from "../Movie";
import Skeleton from "../Skeleton";
import { filterItems } from "../../utils/filterByName";

export const MovieList = ({ load ,items = [] , searchValue }) => {
  
  return (
    <div className="grid-4">
      {load
        ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
        : items.length > 0
        ? filterItems(items ,searchValue).map((item) => <Movie {...item} key={item.kinopoiskId} />)
        : ""}
    </div>
  );
};
