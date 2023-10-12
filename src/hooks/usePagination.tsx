// usePagination.ts
import { useState, useEffect } from "react";

export function usePagination(totalItems: number, maxResults: number) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / maxResults));
  }, [maxResults, totalItems]);

  return { currentPage, totalPages, setCurrentPage };
}
