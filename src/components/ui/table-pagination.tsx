import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

const getButtonArray = (totalPages: number) => {
  return Array.from({ length: totalPages }, (_, index) => index + 1);
};

const TablePagination = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  const totalPages = 7;

  const goToPage = (page: number) => {
    setPage(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => goToPage(page - 1)}
            aria-disabled={page === 1}
            className={
              page === 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {getButtonArray(totalPages).map((item) => (
          <PaginationLink
            onClick={() => setPage(item)}
            isActive={page === item}
            key={item}
          >
            {item}
          </PaginationLink>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => goToPage(page + 1)}
            aria-disabled={page === totalPages}
            className={
              page === totalPages ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
