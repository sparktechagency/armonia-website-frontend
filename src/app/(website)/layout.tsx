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
    <>
      <Nav />
      {children}
      <Modal />
      <Footer />
      <ToastContainer />
    </>
  );
}
