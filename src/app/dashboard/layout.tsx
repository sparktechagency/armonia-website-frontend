import React from "react";
import Sidebar from "../../components/Sidebar";
import Nav from "@/components/Nav";
import Modal from "@/components/Modal";
import { ToastContainer } from "react-toastify";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {/* h-[calc(100vh-82px)] */}
      <main className="xl:px-36 flex">
        <Sidebar />
        {children}
      </main>
      <Modal />
      <ToastContainer />
    </>
  );
}
