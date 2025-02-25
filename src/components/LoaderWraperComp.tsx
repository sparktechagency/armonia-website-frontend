import { FiInbox } from "react-icons/fi";
import { cn } from "../lib/utils";
import { ColorRing, Discuss, RotatingLines } from "react-loader-spinner";

interface ComponentProps {
  isLoading: boolean;
  isError: boolean;
  className?: string;
  loader?: React.ReactNode;
  dataEmpty?: boolean;
  children?: React.ReactNode;
}

const LoaderWraperComp = ({
  isLoading,
  isError,
  className,
  loader,
  dataEmpty = false,
  children,
}: ComponentProps) => {
  if (isLoading || isError || dataEmpty) {
    return (
      <div
        className={cn(
          `h-[50vh] w-full flex flex-col justify-center items-center`,
          className
        )}
      >
        {isLoading ? (
          <>
            {loader || (
              <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            )}
          </>
        ) : isError ? (
          <h1 className="text-red-400">Something want wrong!</h1>
        ) : (
          <h1 className="text-green-400 flex flex-col items-center gap-2">
            <FiInbox size={30} />
            {isError ? isError : <div className="text-green-500">Empty data!</div>}
          </h1>
        )}
      </div>
    );
  }
  return children;
};

export default LoaderWraperComp;
