import React, { useState } from "react";
import store from "../../store/store";
import "./pagination.scss";

const Pagination = () => {
  return (
    <div className="paginationContainer">
      <button
        disabled={store.prevPage === null|| "" ? true : false}
        onClick={() => store.goPrevPage()}
        className="pagination__btn pagination__btn_prev"
      >
        prev
      </button>
      <button
        disabled={store.nextPage === null|| "" ? true : false}
        onClick={() => store.goNextPage()}
        className="pagination__btn pagination__btn_next"
      >
        next{" "}
      </button>
    </div>
  );
};

export default Pagination;
