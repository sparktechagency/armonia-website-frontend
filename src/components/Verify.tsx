"use client";
import React, { useContext, useState } from "react";
import { context } from "@/app/Context";
import Login from "./Login";
import OTPInput from "react-otp-input";
import { useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import Swal from "sweetalert2";
import { BtnSpenner } from "./Spinner";
import { toast } from "react-toastify";
import Forgot from "./Forgot";
import { cn } from "@/lib/utils";
import SetPassword from "./SetPassword";

export default function Verify({
  userId,
  redirect,
}: {
  redirect?: string;
  userId: string;
}) {
  const appContext = useContext(context);
  const [otp, setOtp] = useState("");
  const [mutation, { isLoading }] = useVerifyEmailMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (otp.length !== 6)
        throw new Error("Invalid OTP. Length must 6 character!");
      const res = await mutation({ userId, code: otp }).unwrap();
      sessionStorage.setItem("verify-token", res.data.token);
      appContext?.setModal(redirect === "forgot" ? <SetPassword /> : <Login />);
      toast.success("Verify Successful!", {
        position: "bottom-center",
        autoClose: 1000,
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
  const handelResend = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "otp/resend?userId=" + userId
      ).then((res) => res.json());
      Swal.fire({
        icon: res.ok ? "success" : "error",
        text: res.message,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="bg-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[600px] mx-auto p-8 rounded-lg md:px-12"
      >
        <div className="text-center mb-6 space-y-3">
          <div className="flex items-center lg:gap-40 gap-16">
            <button
              onClick={() =>
                appContext?.setModal(
                  redirect === "forgot" ? <Forgot /> : <Login />
                )
              }
              className={cn("outline-none", {
                invisible: !redirect,
              })}
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
              Verify OTP
            </h1>
          </div>
          <p className="text-gray-400">
            Enter the code that was sent to your email.
          </p>
        </div>
        <div className="flex justify-around mb-3 ">
          <div className="text-4xl font-medium px-[2%]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height: "70px",
                width: "20%",
                margin: "2%",
                background: "#E6F3EC",
                border: "1px solid #142F62",
                marginRight: "8px",
                outline: "none",
                borderRadius: "20px",
                color: "#4E4E4E",
              }}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 flex justify-between px-4 py-2">
          <span>Didn&apos;t receive the code?</span>
          <button
            type="button"
            onClick={handelResend}
            className="text-green-500 ml-1 outline-none"
          >
            Resend
          </button>
        </div>

        <div className="my-4">
          <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 flex justify-center items-center gap-2.5">
            Verify {isLoading && <BtnSpenner />}
          </button>
        </div>
      </form>
    </div>
  );
}
