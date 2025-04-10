import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ResponsivePaginationComponent from "react-responsive-pagination";
// const props = { totalPage, query, setQuery };
const PaginationC = ({ className }: { className?: string }) => {
  const [page, setPage] = useState(1);
  return (
    <div className={cn("w-full flex justify-center", className)}>
      <ResponsivePaginationComponent
        total={40}
        current={page}
        onPageChange={setPage}
      />
    </div>
  );
};

export default PaginationC;
