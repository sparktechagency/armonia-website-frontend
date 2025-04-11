"use client";
import { ReactNode, useContext } from "react";
import { context } from "@/app/Context";

export default function Button({
  children,
  className,
  openModalOnClick,
  gradientBorder = false,
  type = "button",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  openModalOnClick?: ReactNode;
  gradientBorder?: boolean;
  paddingY?: number;
  type?: "button" | "submit" | "reset";
}>) {
  const appContext = useContext(context);

  return (
    <button
      className={
        `${
          gradientBorder ? " text-blue-500" : "bg-blue-500 text-white"
        } font-nunito border-blue-500 border-2 px-3 lg:px-4 py-2 lg:py-3` + className
      }
      // style={{ paddingTop: paddingY + "px", paddingBottom: paddingY + "px" }}
      type={type}
      onClick={() => appContext?.setModal(openModalOnClick)}
    >
      {children}
    </button>
  );
}
