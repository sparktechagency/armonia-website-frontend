import React from "react";

export default function Button({
  children,
  className,
  gradientBorder = false,
  paddingY = 16,
  type = "button",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  gradientBorder?: boolean;
  paddingY?: number;
  type?: "button" | "submit" | "reset";
}>) {
  return (
    <button
      className={
        `${
          gradientBorder ? " text-blue-500" : "bg-blue-500 text-white"
        } font-nunito border-blue-500 border-2 ` + className
      }
      style={{ paddingTop: paddingY + "px", paddingBottom: paddingY + "px" }}
      type={type}
    >
      {children}
    </button>
  );
}
