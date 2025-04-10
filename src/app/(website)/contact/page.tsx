import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function page() {
  return (
    <>
      <section className="py-20 px-3 xl:px-36 flex gap-10 md:gap-16 justify-center items-center flex-col-reverse lg:flex-row">
        <Image
          src="/help.png"
          alt="help"
          width={524}
          height={568}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="lg:w-[534px]">
          <p className="text-yellow-500 mb-2">Let’s Connect</p>
          <h3 className="font-bold text-3xl md:text-5xl mb-4 lg:mb-6 xl:w-3/4">
          ✨ We’re always delighted to help.
          </h3>
          <p className="text-lg text-blue-300">
          Have a question or need help with your booking?. 
          Our Client Concierge Team is here to assist you with anything you need—whether it’s choosing the right treatment, managing a booking, or personalising your Armonia experience.
          </p>
          <div className="flex items-center gap-4 lg:gap-7 mt-11">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 md:size-16"
            >
              <rect
                x="1"
                y="1.62622"
                width="63"
                height="63"
                rx="4"
                stroke="#142F62"
                strokeWidth="2"
              />
              <path
                d="M28.125 45.7099V35.5015C28.125 33.0853 30.0838 31.1265 32.5 31.1265V31.1265C34.9162 31.1265 36.875 33.0853 36.875 35.5015V45.7099M45.625 42.7932V29.197C45.625 27.654 44.9126 26.1975 43.6947 25.2502L35.5697 18.9308C33.7642 17.5264 31.2359 17.5264 29.4303 18.9308L21.3053 25.2502C20.0874 26.1975 19.375 27.654 19.375 29.197V42.7932C19.375 43.5668 19.6823 44.3086 20.2293 44.8556C20.7763 45.4026 21.5181 45.7099 22.2917 45.7099H42.7083C43.4819 45.7099 44.2237 45.4026 44.7707 44.8556C45.3177 44.3086 45.625 43.5668 45.625 42.7932Z"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <h4 className="font-Playfair_Display font-bold text-xl md:text-2xl text-blue-500">
                Visit Us :
              </h4>
              <p className="uppercase text-blue-200 md:text-lg">Us, abc100</p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-7 mt-8">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
               className="size-10 md:size-16"
            >
              <rect
                x="1"
                y="1.62622"
                width="63"
                height="63"
                rx="4"
                stroke="#142F62"
                strokeWidth="2"
              />
              <path
                d="M47.0837 24.8759C47.0837 23.2717 45.7712 21.9592 44.167 21.9592H20.8337C19.2295 21.9592 17.917 23.2717 17.917 24.8759M47.0837 24.8759V42.3759C47.0837 43.9801 45.7712 45.2926 44.167 45.2926H20.8337C19.2295 45.2926 17.917 43.9801 17.917 42.3759V24.8759M47.0837 24.8759L35.3677 33.0773C33.6461 34.2825 31.3546 34.2825 29.633 33.0773L17.917 24.8759"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <h4 className="font-Playfair_Display font-bold text-xl md:text-2xl text-blue-500">
                Drop Us :
              </h4>
              <p className="uppercase text-blue-200 lg:text-lg">
              beauty@armoniaconcierge.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-7 mt-8">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
               className="size-10 md:size-16"
            >
              <rect
                x="1"
                y="1.62622"
                width="63"
                height="63"
                rx="4"
                stroke="#142F62"
                strokeWidth="2"
              />
              <path
                d="M38.281 27.845C37.537 27.101 38.1127 26.2248 38.8817 26.9431C38.9335 26.9915 38.9846 27.0409 39.0349 27.0911C39.0852 27.1414 39.1345 27.1925 39.183 27.2444C39.9012 28.0133 39.0251 28.589 38.281 27.845V27.845ZM40.781 25.3387C39.1346 23.6943 40.3867 21.6505 42.1131 23.2108C42.2517 23.336 42.3874 23.465 42.5201 23.5975C42.6528 23.73 42.7819 23.8655 42.9073 24.004C44.4697 25.7284 42.4275 26.9831 40.781 25.3387V25.3387ZM44.4998 40.2762V44.0262C44.5012 44.3743 44.4299 44.7189 44.2904 45.0379C44.151 45.3569 43.9464 45.6432 43.6899 45.8786C43.4334 46.1139 43.1305 46.2931 42.8007 46.4046C42.4709 46.5161 42.1215 46.5576 41.7748 46.5262C37.9283 46.1083 34.2335 44.7939 30.9873 42.6887C27.9671 40.7696 25.4065 38.2089 23.4873 35.1887C21.3748 31.9277 20.0601 28.215 19.6498 24.3512C19.6186 24.0056 19.6596 23.6572 19.7704 23.3283C19.8812 22.9993 20.0593 22.6971 20.2933 22.4407C20.5272 22.1844 20.8121 21.9796 21.1295 21.8394C21.447 21.6991 21.7902 21.6265 22.1373 21.6262H25.8873C26.4939 21.6203 27.082 21.8351 27.542 22.2306C28.002 22.6262 28.3024 23.1755 28.3873 23.7762C28.5456 24.9763 28.8391 26.1546 29.2623 27.2887C29.4305 27.7361 29.4669 28.2224 29.3672 28.6898C29.2675 29.1573 29.0359 29.5864 28.6998 29.9262V29.9262C27.7621 30.8639 27.5486 32.327 28.3291 33.3991C29.5567 35.0853 31.0407 36.5693 32.7269 37.7969C33.799 38.5774 35.2621 38.3639 36.1998 37.4262V37.4262C36.5397 37.0901 36.9687 36.8585 37.4362 36.7588C37.9037 36.6591 38.3899 36.6955 38.8373 36.8637C39.9714 37.2869 41.1497 37.5804 42.3498 37.7387C42.957 37.8244 43.5115 38.1302 43.908 38.5981C44.3044 39.0659 44.515 39.6632 44.4998 40.2762Z"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h4 className="font-Playfair_Display font-bold text-xl md:text-2xl text-blue-500">
                Call Us :
              </h4>
              <p className="uppercase text-blue-200 md:text-lg">
                Call:  +351 911796101
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-3 xl:px-36 text-center bg-yellow-50">
        <p className="font-semibold text-yellow-500">SCHEDULE YOUR PRESENCE</p>
        <h2 className="font-bold text-3xl lg:text-5xl text-blue-500 font-Playfair_Display mb-5">
        Let’s Connect
        </h2>
        <p className="font-medium text-lg text-blue-300">
        Have a question or need help with your booking?. Our Client Concierge Team is here to assist you with anything you need—whether it’s choosing the right treatment, managing a booking, or personalising your Armonia experience.
        </p>
        <form className="max-w-screen-lg bg-white mx-auto p-8 lg:p-[100px] mt-16 flex flex-col gap-4 shadow-xl rounded-3xl">
          <div className="relative flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="focus:outline-none border h-16 w-full rounded pl-12 border-blue-500"
            />
          </div>
          <div className="relative flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3"
            >
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="focus:outline-none border h-16 w-full rounded pl-12 border-blue-500"
            />
          </div>
          <div className="relative flex items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3"
            >
              <path
                d="M22.0004 17.42V20.42C22.0016 20.6985 21.9445 20.9741 21.8329 21.2293C21.7214 21.4845 21.5577 21.7136 21.3525 21.9018C21.1473 22.0901 20.905 22.2335 20.6412 22.3227C20.3773 22.4119 20.0978 22.445 19.8204 22.42C16.7433 22.0856 13.7874 21.0341 11.1904 19.35C8.77425 17.8146 6.72576 15.7661 5.19042 13.35C3.5004 10.7412 2.44866 7.77097 2.12042 4.67997C2.09543 4.40344 2.1283 4.12474 2.21692 3.8616C2.30555 3.59846 2.44799 3.35666 2.63519 3.1516C2.82238 2.94653 3.05023 2.78268 3.30421 2.6705C3.5582 2.55831 3.83276 2.50024 4.11042 2.49997H7.11042C7.59573 2.4952 8.06621 2.66705 8.43418 2.98351C8.80215 3.29996 9.0425 3.73942 9.11042 4.21997C9.23704 5.18004 9.47187 6.1227 9.81042 7.02997C9.94497 7.3879 9.97408 7.77689 9.89433 8.15086C9.81457 8.52482 9.62928 8.86809 9.36042 9.13998L8.09042 10.41C9.51398 12.9135 11.5869 14.9864 14.0904 16.41L15.3604 15.14C15.6323 14.8711 15.9756 14.6858 16.3495 14.6061C16.7235 14.5263 17.1125 14.5554 17.4704 14.69C18.3777 15.0285 19.3204 15.2634 20.2804 15.39C20.7662 15.4585 21.2098 15.7032 21.527 16.0775C21.8441 16.4518 22.0126 16.9296 22.0004 17.42Z"
                stroke="#142F62"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="focus:outline-none border h-16 w-full rounded pl-12 border-blue-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Any Note For Us"
            className="focus:outline-none border h-36 w-full rounded p-4 border-blue-500"
          ></textarea>
          <Button
            className="w-full lg:text-2xl font-Playfair_Display rounded"
            paddingY={16}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </section>
    </>
  );
}
