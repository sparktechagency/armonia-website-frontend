import React from "react";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Nav from "@/components/Nav";
import { ToastContainer } from "react-toastify";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="font-lato max-w-[1920px] mx-auto">
      <Nav />
      {children}
      <Modal />
      <Footer />
      <ToastContainer />
    </body>
  );
}
