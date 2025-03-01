"use client";
import { context } from "@/app/Context";
import React, { FormEvent, useContext, useState } from "react";
import { VscSend } from "react-icons/vsc";
import Swal from "sweetalert2";
import { BtnSpenner } from "../Spinner";
import { useParams } from "next/navigation";
// type FormValues = {
//   [key: string]: FormDataEntryValue | undefined;
// };

const SendMessageIput = () => {
  const appContext = useContext(context);
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    // const formValues: FormValues = Object.fromEntries(formData.entries());
    const message = {
      conversationId: params.id,
      message: formData.get("message"),
    };
    try {
      appContext?.socket?.emit("message", message);
      e.currentTarget.reset();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text:
          error.message ||
          error?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center gap-2 mx-auto sticky top-[100%] bg-[#fafafa]/90 py-2"
    >
      <input
        required
        type="text"
        name="message"
        placeholder="Type your message..."
        className="max-w-96 w-full p-2 border border-gray-300 rounded-lg outline-none hover:border-yellow-500 text-black"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#CCAD72] text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex justify-center items-center gap-1.5 disabled:bg-green-400"
      >
        {loading && <BtnSpenner />} <VscSend size={22} />
      </button>
    </form>
  );
};

export default SendMessageIput;
