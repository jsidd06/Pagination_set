import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination({items,  itemsPerPage, setCurrentItem }) {
  const [noOfPages, setNoOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
      const endOffset = currentPage + itemsPerPage;
      setCurrentItem(items.slice(currentPage, endOffset));
    setNoOfPages(Math.ceil(items.length /itemsPerPage) );
  }, [currentPage, itemsPerPage]);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
        setCurrentPage(newOffset);
    };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={noOfPages}
        previousLabel="< "
        containerClassName="pagination"
        activeClassName="active"
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
}

export default Pagination;
