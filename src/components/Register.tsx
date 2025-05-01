"use client";
import { context } from "@/app/Context";
import React, { useContext, useState } from "react";
import Login from "./Login";
import { cn } from "@/lib/utils";
import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import Swal from "sweetalert2";
import { BtnSpenner } from "./Spinner";
import Verify from "./Verify";

export default function Register({
  requestType,
}: {
  requestType?: "cutomer" | "beautician";
}) {
  const appContext = useContext(context);
  const [type, setType] = useState<string | null>(requestType || "customer");
  const [matchingPass, setMatchingPass] = useState({ pass: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [confrimPassword, setConfrimPassword] = useState(false);
  const [mutation, { isLoading }] = useRegistrationMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues: Record<string, any> = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    if (formValues.password !== formValues.confirmPassword || !type) {
      return;
    }
    try {
      const res = await mutation(formValues).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success!!",
        text: " OTP sent to your email. Please verify your account.",
        draggable: true,
        timer: 5000,
        timerProgressBar: true,
      });
      appContext?.setModal(<Verify userId={res.data.id} />);
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
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-black">Sign Up</h1>
        <p className="text-gray-400">Please enter your e-mail and password:</p>
      </div>
      <form onSubmit={handleSubmit} className="md:px-12">
        <div className="mb-4 space-y-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="name"
            type="text"
            placeholder="User Name"
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onChange={(e) =>
              setMatchingPass((c) => ({ ...c, pass: e.target.value }))
            }
          />
          <span
            className="cursor-pointer absolute right-3 top-2 text-gray-600 select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2416_2943)">
                  <path
                    d="M21.8701 11.5004C21.2301 10.3904 17.7101 4.82036 11.7301 5.00036C6.20007 5.14036 3.00007 10.0004 2.13007 11.5004C2.0423 11.6524 1.99609 11.8248 1.99609 12.0004C1.99609 12.1759 2.0423 12.3483 2.13007 12.5004C2.76007 13.5904 6.13007 19.0004 12.0201 19.0004H12.2701C17.8001 18.8604 21.0101 14.0004 21.8701 12.5004C21.9578 12.3483 22.004 12.1759 22.004 12.0004C22.004 11.8248 21.9578 11.6524 21.8701 11.5004ZM12.2201 17.0004C7.91007 17.1004 5.10007 13.4104 4.22007 12.0004C5.22007 10.3904 7.83007 7.10036 11.8301 7.00036C16.1201 6.89036 18.9401 10.5904 19.8301 12.0004C18.8001 13.6104 16.2201 16.9004 12.2201 17.0004Z"
                    fill="black"
                  />
                  <path
                    d="M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2416_2943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2416_2930)">
                  <path
                    d="M4.71019 3.29019C4.61695 3.19695 4.50626 3.12299 4.38443 3.07253C4.26261 3.02207 4.13204 2.99609 4.00019 2.99609C3.86833 2.99609 3.73776 3.02207 3.61594 3.07253C3.49411 3.12299 3.38342 3.19695 3.29019 3.29019C3.10188 3.47849 2.99609 3.73388 2.99609 4.00019C2.99609 4.26649 3.10188 4.52188 3.29019 4.71019L8.92019 10.3402C8.56399 11.0028 8.43077 11.7626 8.54027 12.5068C8.64978 13.2511 8.99617 13.9403 9.52812 14.4722C10.0601 15.0042 10.7493 15.3506 11.4935 15.4601C12.2378 15.5696 12.9976 15.4364 13.6602 15.0802L19.2902 20.7102C19.3831 20.8039 19.4937 20.8783 19.6156 20.9291C19.7375 20.9798 19.8682 21.006 20.0002 21.006C20.1322 21.006 20.2629 20.9798 20.3848 20.9291C20.5066 20.8783 20.6172 20.8039 20.7102 20.7102C20.8039 20.6172 20.8783 20.5066 20.9291 20.3848C20.9798 20.2629 21.006 20.1322 21.006 20.0002C21.006 19.8682 20.9798 19.7375 20.9291 19.6156C20.8783 19.4937 20.8039 19.3831 20.7102 19.2902L4.71019 3.29019ZM12.0002 13.5002C11.6024 13.5002 11.2208 13.3422 10.9395 13.0608C10.6582 12.7795 10.5002 12.398 10.5002 12.0002V11.9302L12.0602 13.4902L12.0002 13.5002Z"
                    fill="black"
                  />
                  <path
                    d="M12.2201 17.0011C7.92007 17.1011 5.10007 13.4111 4.22007 12.0011C4.84654 11.0018 5.59943 10.0876 6.46007 9.28109L5.00007 7.87109C3.87139 8.93456 2.90448 10.1575 2.13007 11.5011C2.0423 11.6531 1.99609 11.8256 1.99609 12.0011C1.99609 12.1766 2.0423 12.3491 2.13007 12.5011C2.76007 13.5911 6.13007 19.0011 12.0201 19.0011H12.2701C13.3776 18.9682 14.4708 18.7415 15.5001 18.3311L13.9201 16.7511C13.3644 16.8973 12.7943 16.9811 12.2201 17.0011Z"
                    fill="black"
                  />
                  <path
                    d="M21.87 11.5004C21.23 10.3904 17.7 4.82036 11.73 5.00036C10.6225 5.03321 9.52924 5.25998 8.5 5.67036L10.08 7.25036C10.6356 7.10419 11.2058 7.02034 11.78 7.00036C16.07 6.89036 18.89 10.5904 19.78 12.0004C19.1381 13.0027 18.3682 13.917 17.49 14.7204L19 16.1304C20.1428 15.0697 21.1234 13.8466 21.91 12.5004C21.9918 12.3449 22.0311 12.1705 22.0241 11.995C22.0171 11.8194 21.9639 11.6488 21.87 11.5004Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2416_2930">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </span>
        </div>

        <div className="relative mb-4">
          <input
            type={confrimPassword ? "text" : "password"}
            name="confirmPassword"
            id="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring focus:ring-[#142f62]"
            required
            onChange={(e) =>
              setMatchingPass((c) => ({ ...c, confirm: e.target.value }))
            }
          />
          <span
            className="cursor-pointer absolute right-3 top-2 text-gray-600 select-none"
            onClick={() => setConfrimPassword(!confrimPassword)}
          >
            {confrimPassword ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2416_2943)">
                  <path
                    d="M21.8701 11.5004C21.2301 10.3904 17.7101 4.82036 11.7301 5.00036C6.20007 5.14036 3.00007 10.0004 2.13007 11.5004C2.0423 11.6524 1.99609 11.8248 1.99609 12.0004C1.99609 12.1759 2.0423 12.3483 2.13007 12.5004C2.76007 13.5904 6.13007 19.0004 12.0201 19.0004H12.2701C17.8001 18.8604 21.0101 14.0004 21.8701 12.5004C21.9578 12.3483 22.004 12.1759 22.004 12.0004C22.004 11.8248 21.9578 11.6524 21.8701 11.5004ZM12.2201 17.0004C7.91007 17.1004 5.10007 13.4104 4.22007 12.0004C5.22007 10.3904 7.83007 7.10036 11.8301 7.00036C16.1201 6.89036 18.9401 10.5904 19.8301 12.0004C18.8001 13.6104 16.2201 16.9004 12.2201 17.0004Z"
                    fill="black"
                  />
                  <path
                    d="M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2416_2943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2416_2930)">
                  <path
                    d="M4.71019 3.29019C4.61695 3.19695 4.50626 3.12299 4.38443 3.07253C4.26261 3.02207 4.13204 2.99609 4.00019 2.99609C3.86833 2.99609 3.73776 3.02207 3.61594 3.07253C3.49411 3.12299 3.38342 3.19695 3.29019 3.29019C3.10188 3.47849 2.99609 3.73388 2.99609 4.00019C2.99609 4.26649 3.10188 4.52188 3.29019 4.71019L8.92019 10.3402C8.56399 11.0028 8.43077 11.7626 8.54027 12.5068C8.64978 13.2511 8.99617 13.9403 9.52812 14.4722C10.0601 15.0042 10.7493 15.3506 11.4935 15.4601C12.2378 15.5696 12.9976 15.4364 13.6602 15.0802L19.2902 20.7102C19.3831 20.8039 19.4937 20.8783 19.6156 20.9291C19.7375 20.9798 19.8682 21.006 20.0002 21.006C20.1322 21.006 20.2629 20.9798 20.3848 20.9291C20.5066 20.8783 20.6172 20.8039 20.7102 20.7102C20.8039 20.6172 20.8783 20.5066 20.9291 20.3848C20.9798 20.2629 21.006 20.1322 21.006 20.0002C21.006 19.8682 20.9798 19.7375 20.9291 19.6156C20.8783 19.4937 20.8039 19.3831 20.7102 19.2902L4.71019 3.29019ZM12.0002 13.5002C11.6024 13.5002 11.2208 13.3422 10.9395 13.0608C10.6582 12.7795 10.5002 12.398 10.5002 12.0002V11.9302L12.0602 13.4902L12.0002 13.5002Z"
                    fill="black"
                  />
                  <path
                    d="M12.2201 17.0011C7.92007 17.1011 5.10007 13.4111 4.22007 12.0011C4.84654 11.0018 5.59943 10.0876 6.46007 9.28109L5.00007 7.87109C3.87139 8.93456 2.90448 10.1575 2.13007 11.5011C2.0423 11.6531 1.99609 11.8256 1.99609 12.0011C1.99609 12.1766 2.0423 12.3491 2.13007 12.5011C2.76007 13.5911 6.13007 19.0011 12.0201 19.0011H12.2701C13.3776 18.9682 14.4708 18.7415 15.5001 18.3311L13.9201 16.7511C13.3644 16.8973 12.7943 16.9811 12.2201 17.0011Z"
                    fill="black"
                  />
                  <path
                    d="M21.87 11.5004C21.23 10.3904 17.7 4.82036 11.73 5.00036C10.6225 5.03321 9.52924 5.25998 8.5 5.67036L10.08 7.25036C10.6356 7.10419 11.2058 7.02034 11.78 7.00036C16.07 6.89036 18.89 10.5904 19.78 12.0004C19.1381 13.0027 18.3682 13.917 17.49 14.7204L19 16.1304C20.1428 15.0697 21.1234 13.8466 21.91 12.5004C21.9918 12.3449 22.0311 12.1705 22.0241 11.995C22.0171 11.8194 21.9639 11.6488 21.87 11.5004Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2416_2930">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </span>
          <p
            className={cn("text-sm text-red-500 mt-1", {
              hidden: !(
                matchingPass.pass &&
                matchingPass.confirm &&
                matchingPass.pass !== matchingPass.confirm
              ),
            })}
          >
            Confirm password doesn&apos;t match!
          </p>
        </div>
        <div className="flex justify-evenly items-center mb-5">
          <div className="mt-4 text-base lg:text-xl font-semibold font-lato text-[#142f62] flex items-center">
            <input
              type="checkbox"
              id="type"
              value={"customer"}
              name="type"
              checked={!!(type === "customer")}
              onChange={() =>
                setType((c) => (c === "customer" ? null : "customer"))
              }
              className="mr-2 h-5 w-5 rounded-full border-gray-300 text-[#142f62] focus:ring-[#142f62]"
            />
            As Client
          </div>

          <div className="mt-4 text-base lg:text-xl font-semibold font-lato text-[#142f62] flex items-center">
            <input
              type="checkbox"
              id="type"
              name="type"
              value={"beautician"}
              checked={!!(type === "beautician")}
              onChange={() =>
                setType((c) => (c === "beautician" ? null : "beautician"))
              }
              className="mr-2 h-5 w-5 rounded-full border-gray-300 text-[#142f62] focus:ring-[#142f62]"
            />
            As Beautician
          </div>
        </div>
        <p
          className={cn("text-sm text-red-500 text-center", {
            hidden: !!type,
          })}
        >
          Account type select is required!
        </p>
        <div className="text-center mt-6">
          <button
            disabled={isLoading}
            className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 flex justify-center items-center gap-2.5"
          >
            Sign Up {isLoading && <BtnSpenner />}
          </button>
        </div>
      </form>

      <p className="text-base lg:text-xl text-gray-500 text-center mt-5">
        Already have an account?{" "}
        <span
          onClick={() => appContext?.setModal(<Login />)}
          className="text-black font-semibold"
        >
          Log In
        </span>
      </p>
    </div>
  );
}
