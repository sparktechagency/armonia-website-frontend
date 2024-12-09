import React from "react";
import Sidebar from "./Sidebar";
import Nav from "@/components/Nav";
import Modal from "@/components/Modal";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="font-lato max-w-[1920px] mx-auto h-screen">
      <Nav />
      <main className="px-36 flex h-[calc(100vh-82px)]">
        <Sidebar />
        {children}
      </main>
      <Modal />
    </body>
  );
}
