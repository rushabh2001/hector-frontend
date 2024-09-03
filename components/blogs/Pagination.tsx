"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface PaginationProps {
  page: number;
  setPage: (value: number) => void;
  limit: number;
  setLimit: (value: number) => void;
  totalItems: number | undefined;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setLimit,
  setPage,
  totalItems,
  limit,
}) => {
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const pages = Math.ceil(totalItems / limit);
    setTotalPages(pages);
  }, [totalItems, limit]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setPage(1);
  };

  if (totalItems === undefined) {
    return null;
  }
  return (
    <div className="basic-pagination basic-pagination-2 mb-4 text-center">
      <ul>
        <li>
          <button onClick={() => handlePageChange(1)} disabled={page === 1}>
            <i className="fas fa-angle-double-left"></i>
          </button>
        </li>
        {page >= 3 && (
          <li>
            <button>...</button>
          </li>
        )}
        {page > 1 && (
          <li>
            <button onClick={() => handlePageChange(page - 1)}>
              {page - 1}
            </button>
          </li>
        )}
        <li className="active">
          <button>{page}</button>
        </li>
        {page != totalPages && (
          <li>
            <button onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </button>
          </li>
        )}
        {page + 1 < totalPages && (
          <li>
            <button>...</button>
          </li>
        )}
        <li>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={page == totalPages}
          >
            <i className="fas fa-angle-double-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
