import React from "react";
import "./Pagination.scss";

const pages = [1, 2, 3, 4, 5];

export const Pagination = ({ setPage, currentPage }) => {
  const onClick = (event) => {
    const page = event.target.dataset.page;
    setPage(page);
  };

  return (
    <ul className="pagination">
      {pages.map((page) => {
        return (
          <li
            className={Number(currentPage) === Number(page) ? "active" : ""}
            key={page}
            onClick={onClick}
            data-page={page}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};
