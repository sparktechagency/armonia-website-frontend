import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BeauticianCart from "@/components/BeauticianCart";

export default function page() {
  return (
    <>
      <header className="flex items-center justify-center py-28 relative bg-gradient-to-b from-[#FFFFFF00] to-[#002B6B]">
        <Image
          src="/paint-brush.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute -z-10"
        />
        <form className="p-10 rounded-xl bg-[#ffffffb3] flex flex-col items-center">
          <h3 className="font-Playfair_Display font-semibold text-3xl text-blue-500 mb-10">
            Book five star beauty service, direct to your door
          </h3>
          <select
            name="category"
            className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
          >
            <option hidden>Select Category</option>
            <option value="nails">Nails</option>
            <option value="makeup">Makeup</option>
            <option value="massage">Massage</option>
            <option value="facial">Facial</option>
            <option value="waxing">Waxing</option>
          </select>
          <input
            type="number"
            name="postcode"
            placeholder="Postcode"
            className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
          />
          <input
            type="date"
            name="date"
            className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-5"
          />
          <Button className="w-full max-w-md rounded-2xl" paddingY={12}>
            Book Now
          </Button>
        </form>
      </header>
      <section className="px-36 py-16 bg-[#fffbef]">
        <h3 className="text-blue-500 text-5xl font-semibold text-center">
          We are Experienced in making you
          <br />
          very Beautiful
        </h3>
        <div className="grid grid-cols-3 gap-6 h-[614px] rounded-[40px] w-full overflow-hidden mt-6">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className={`${index === 0 ? "row-span-2" : ""} relative`}
            >
              <Image
                key={index}
                src={`/experience/${item}.png`}
                alt="service"
                fill
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 text-center">
        <p className="text-yellow-500">Popular Beautician</p>
        <h3 className="text-5xl font-semibold text-blue-500 font-Playfair_Display">
          Recommended
        </h3>
        <div className="flex items-center gap-9 px-36 mt-14">
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
        </div>
      </section>
      <section className="px-36 py-16 text-center bg-yellow-50">
        <p className="text-yellow-500">Testimonials</p>
        <h3 className="text-5xl font-semibold text-blue-500 font-Playfair_Display">
          What our Customers says...
        </h3>
        <div className="my-14 flex h-[688px] bg-blue-500 rounded-[40px] items-center justify-center gap-44">
          <div className="flex justify-center max-w-xl w-full">
            <span className="w-[70px] h-[228px] bg-white rounded-full block mr-3"></span>
            <span className="w-[70px] h-[443px] bg-white rounded-full block relative">
              <div className="w-[280px] h-[280px] rounded-full border-4 border-white overflow-hidden flex items-center justify-center absolute bottom-10 left-5">
                <Image
                  src="/beautician.jpg"
                  alt="quote"
                  width={280}
                  height={280}
                />
              </div>
            </span>
          </div>
          <div className="text-white max-w-xl text-start relative">
            <svg
              width="46"
              height="41"
              viewBox="0 0 46 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-10 -left-10"
            >
              <path
                d="M0 28.276C0 20.4253 4.69333 11.1667 14.08 0.5L20.096 4.212C15.6587 11.0387 13.184 16.244 12.672 19.828L20.224 24.436C20.224 27.4227 19.4987 30.3667 18.048 33.268C16.6827 36.1693 15.2747 38.4307 13.824 40.052C9.04533 40.052 5.248 38.772 2.432 36.212C0.810667 34.7613 0 32.116 0 28.276ZM24.96 28.276C24.96 20.4253 29.6533 11.1667 39.04 0.5L45.056 4.212C40.6187 11.0387 38.144 16.244 37.632 19.828L45.184 24.436C45.184 27.4227 44.4587 30.3667 43.008 33.268C41.6427 36.1693 40.2347 38.4307 38.784 40.052C34.0053 40.052 30.208 38.772 27.392 36.212C25.7707 34.7613 24.96 32.116 24.96 28.276Z"
                fill="white"
              />
            </svg>

            <h5 className="font-Playfair_Display font-bold text-5xl">
              Leslie Alexander
            </h5>
            <p className="text-xl mt-5">
              &ldquo;Absolutely love this platform! Booking my salon
              appointments has never been so easy and hassle-free. The interface
              is sleek, intuitive, and perfect for my busy lifestyle!&ldquo;
            </p>
            <svg
              width="46"
              height="41"
              viewBox="0 0 46 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-10 -right-10"
            >
              <path
                d="M45.1841 28.276C45.1841 20.4253 40.4907 11.1667 31.1041 0.5L25.0881 4.212C29.5254 11.0387 32.0001 16.244 32.5121 19.828L24.9601 24.436C24.9601 27.4227 25.6854 30.3667 27.1361 33.268C28.5014 36.1693 29.9094 38.4307 31.3601 40.052C36.1387 40.052 39.9361 38.772 42.7521 36.212C44.3734 34.7613 45.1841 32.116 45.1841 28.276ZM20.2241 28.276C20.2241 20.4253 15.5308 11.1667 6.14408 0.5L0.128082 4.212C4.56541 11.0387 7.04008 16.244 7.55208 19.828L8.01086e-05 24.436C8.01086e-05 27.4227 0.725414 30.3667 2.17608 33.268C3.54141 36.1693 4.94941 38.4307 6.40008 40.052C11.1787 40.052 14.9761 38.772 17.7921 36.212C19.4134 34.7613 20.2241 32.116 20.2241 28.276Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="py-40 flex gap-16 justify-center">
        <Image src="/help.png" alt="help" width={524} height={568} />
        <div className="w-[534px]">
          <p className="text-yellow-500 mb-2">Get in Touch!</p>
          <h3 className="font-bold text-5xl mb-6">
            We are here to help
            <br />
            you always...
          </h3>
          <p className="text-lg text-blue-300">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to many
            desktop publishing packages.
          </p>
          <div className="flex items-center gap-7 mt-11">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1.62622"
                width="63"
                height="63"
                rx="4"
                stroke="#142F62"
                stroke-width="2"
              />
              <path
                d="M28.125 45.7099V35.5015C28.125 33.0853 30.0838 31.1265 32.5 31.1265V31.1265C34.9162 31.1265 36.875 33.0853 36.875 35.5015V45.7099M45.625 42.7932V29.197C45.625 27.654 44.9126 26.1975 43.6947 25.2502L35.5697 18.9308C33.7642 17.5264 31.2359 17.5264 29.4303 18.9308L21.3053 25.2502C20.0874 26.1975 19.375 27.654 19.375 29.197V42.7932C19.375 43.5668 19.6823 44.3086 20.2293 44.8556C20.7763 45.4026 21.5181 45.7099 22.2917 45.7099H42.7083C43.4819 45.7099 44.2237 45.4026 44.7707 44.8556C45.3177 44.3086 45.625 43.5668 45.625 42.7932Z"
                stroke="#142F62"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <h4 className="font-Playfair_Display font-bold text-2xl text-blue-500">
                Visit Us :
              </h4>
              <p className="uppercase text-blue-200 text-lg">Us, abc100</p>
            </div>
          </div>
          <div className="flex items-center gap-7 mt-8">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1.62622"
                width="63"
                height="63"
                rx="4"
                stroke="#142F62"
                stroke-width="2"
              />
              <path
                d="M47.0837 24.8759C47.0837 23.2717 45.7712 21.9592 44.167 21.9592H20.8337C19.2295 21.9592 17.917 23.2717 17.917 24.8759M47.0837 24.8759V42.3759C47.0837 43.9801 45.7712 45.2926 44.167 45.2926H20.8337C19.2295 45.2926 17.917 43.9801 17.917 42.3759V24.8759M47.0837 24.8759L35.3677 33.0773C33.6461 34.2825 31.3546 34.2825 29.633 33.0773L17.917 24.8759"
                stroke="#142F62"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <h4 className="font-Playfair_Display font-bold text-2xl text-blue-500">
                Drop Us :
              </h4>
              <p className="uppercase text-blue-200 text-lg">
                support@beautyness.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-7 mt-8">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1.62622"
                width="63"
                height="63"
                rx="4"
                stroke="#142F62"
                stroke-width="2"
              />
              <path
                d="M38.281 27.845C37.537 27.101 38.1127 26.2248 38.8817 26.9431C38.9335 26.9915 38.9846 27.0409 39.0349 27.0911C39.0852 27.1414 39.1345 27.1925 39.183 27.2444C39.9012 28.0133 39.0251 28.589 38.281 27.845V27.845ZM40.781 25.3387C39.1346 23.6943 40.3867 21.6505 42.1131 23.2108C42.2517 23.336 42.3874 23.465 42.5201 23.5975C42.6528 23.73 42.7819 23.8655 42.9073 24.004C44.4697 25.7284 42.4275 26.9831 40.781 25.3387V25.3387ZM44.4998 40.2762V44.0262C44.5012 44.3743 44.4299 44.7189 44.2904 45.0379C44.151 45.3569 43.9464 45.6432 43.6899 45.8786C43.4334 46.1139 43.1305 46.2931 42.8007 46.4046C42.4709 46.5161 42.1215 46.5576 41.7748 46.5262C37.9283 46.1083 34.2335 44.7939 30.9873 42.6887C27.9671 40.7696 25.4065 38.2089 23.4873 35.1887C21.3748 31.9277 20.0601 28.215 19.6498 24.3512C19.6186 24.0056 19.6596 23.6572 19.7704 23.3283C19.8812 22.9993 20.0593 22.6971 20.2933 22.4407C20.5272 22.1844 20.8121 21.9796 21.1295 21.8394C21.447 21.6991 21.7902 21.6265 22.1373 21.6262H25.8873C26.4939 21.6203 27.082 21.8351 27.542 22.2306C28.002 22.6262 28.3024 23.1755 28.3873 23.7762C28.5456 24.9763 28.8391 26.1546 29.2623 27.2887C29.4305 27.7361 29.4669 28.2224 29.3672 28.6898C29.2675 29.1573 29.0359 29.5864 28.6998 29.9262V29.9262C27.7621 30.8639 27.5486 32.327 28.3291 33.3991C29.5567 35.0853 31.0407 36.5693 32.7269 37.7969C33.799 38.5774 35.2621 38.3639 36.1998 37.4262V37.4262C36.5397 37.0901 36.9687 36.8585 37.4362 36.7588C37.9037 36.6591 38.3899 36.6955 38.8373 36.8637C39.9714 37.2869 41.1497 37.5804 42.3498 37.7387C42.957 37.8244 43.5115 38.1302 43.908 38.5981C44.3044 39.0659 44.515 39.6632 44.4998 40.2762Z"
                stroke="#142F62"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>
              <h4 className="font-Playfair_Display font-bold text-2xl text-blue-500">
                Call Us :
              </h4>
              <p className="uppercase text-blue-200 text-lg">
                Call: 1-800-123-9999
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 text-center bg-yellow-50">
        <p className="font-semibold text-yellow-500">SCHEDULE YOUR PRESENCE</p>
        <h2 className="font-bold text-5xl text-blue-500 font-Playfair_Display mb-5">
          Get in touch
        </h2>
        <p className="font-medium text-lg text-blue-300">
          There are many variations of passages of Lorem Ipsum available
          <br />
          but the majority have suffered alteration in some form.
        </p>
        <form className="max-w-screen-lg bg-white mx-auto p-[100px] mt-16 flex flex-col gap-4 shadow-xl rounded-3xl">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#142F62"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="#142F62"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            className="w-full text-2xl font-Playfair_Display rounded"
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
