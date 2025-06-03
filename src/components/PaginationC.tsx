import { cn } from "@/lib/utils";
import { TUniObject } from "@/type/index.type";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal-light-dark.css";
export type TQuery<T> = {
  page: number;
  search?: string;
  limit: number;
} & T;
export type TSetQuery<T> = React.Dispatch<React.SetStateAction<TQuery<T>>>;

const PaginationC = ({
  query,
  setQuery,
  totalPage,
  className,
}: {
  className?: string;
  query: TQuery<TUniObject>;
  setQuery: TSetQuery<TUniObject>;
  totalPage: number;
}) => {
  const handleChange = (current: number) => {
    setQuery((c) => ({ ...c, page: current }));
  };
  return (
    <div className={cn("w-full max-w-80 mx-auto py-8", className)}>
      <ResponsivePaginationComponent
        total={totalPage}
        current={query.page || 1}
        onPageChange={handleChange}
      />
    </div>
  );
};

export default PaginationC;
