import { cn } from "@/lib/utils";
import Image from "next/image";

export const BtnSpenner = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-block animate-spin h-1 w-1 p-1.5 border-2 border-blue-100 border-r-[#f5289105] rounded-full"
      )}
    />
  );
};

export const RootSpinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div className="animate-spin transition-all h-48 w-48 lg:h-64 lg:w-64">
        <Image
          src={"/loading.png"}
          alt={"Loader"}
          width={1000}
          height={1000}
          className="rounded-full h-full w-full"
        />
      </div>
      <div className="absolute inset-0 h-full w-full flex justify-center items-center">
        <Image
          src={"/logo-footer.png"}
          alt={"Loader"}
          width={1000}
          height={1000}
          className="w-24 lg:w-36"
        />
      </div>
    </div>
  );
};
