import Link from "next/link";
import React, { useContext } from "react";
import Verify from "./Verify";
import { context } from "@/app/Context";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import Swal from "sweetalert2";
import { BtnSpenner } from "./Spinner";
import Login from "./Login";

export default function Forgot() {
  const appContext = useContext(context);
  const [mutation, { isLoading }] = useForgotPasswordMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues: Record<string, any> = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    try {
      const res = await mutation(formValues).unwrap();
      appContext?.setModal(<Verify userId={res.data.id} redirect="forgot" />);
      Swal.fire({
        icon: "success",
        text: " OTP sent to your email. Please check your inbox.",
        draggable: true,
        timer: 5000,
        timerProgressBar: true,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text:
          error.message ||
          error?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    }
  };
  return (
    <div className="w-full md:w-[600px] mx-auto shadow-2xl p-8 rounded-lg bg-white">
      <div className="text-center mb-6 space-y-3">
        <div className="flex items-center lg:gap-40 gap-16">
          <button
            onClick={() => appContext?.setModal(<Login />)}
            className="outline-none"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6489 20.0485C11.1803 20.5171 10.4205 20.5171 9.95186 20.0485L2.75186 12.8485C2.28323 12.3799 2.28323 11.6201 2.75186 11.1514L9.95186 3.95145C10.4205 3.48282 11.1803 3.48282 11.6489 3.95145C12.1175 4.42008 12.1175 5.17988 11.6489 5.6485L6.49745 10.8H20.4004C21.0631 10.8 21.6004 11.3372 21.6004 12C21.6004 12.6627 21.0631 13.2 20.4004 13.2L6.49745 13.2L11.6489 18.3514C12.1175 18.8201 12.1175 19.5799 11.6489 20.0485Z"
                fill="#262626"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-black font-Playfair_Display">
            Forget Password
          </h1>
        </div>
        <p className="text-gray-400">Please enter your e-mail</p>
      </div>

      <form onSubmit={handleSubmit} className="md:px-12">
        <div className="mb-4 space-y-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4 mt-9">
          <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 flex justify-center items-center gap-2.5">
            Send OTP {isLoading && <BtnSpenner />}
          </button>
        </div>
      </form>
    </div>
  );
}
