import { cn } from "@/lib/utils";

export const BtnSpenner = ({className}: {className?: string}) => {
    return (
      <span className={cn("inline-block animate-spin h-1 w-1 p-1.5 border-2 border-blue-100 border-r-[#f5289105] rounded-full")}/>
    );
  };