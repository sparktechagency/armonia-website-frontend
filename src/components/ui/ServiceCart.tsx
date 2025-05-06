import { context } from "@/app/Context";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React, { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Login from "../Login";
import Checkout from "../Checkout";
import { useGetUserQuery } from "@/redux/features/users/users.api";
import { TUniObject } from "@/type/index.type";
import Link from "next/link";

const ServiceCart = ({ service }: { service: any }) => {
  const appContext = useContext(context);
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetUserQuery(service.profileId, {
    skip: !service.profileId,
  });
  const handleCheckout = () => {
    if (user?.id) {
      appContext?.setModal(
        <Checkout
          selectedServices={[service]}
          profileId={service.profileId}
          allowedWeekdays={[
            ...data?.data?.weeklySchedules?.weekDays.map(
              (item: TUniObject) => item.dayName
            ),
          ]}
        />
      );
    } else {
      appContext?.setModal(<Login />);
    }
  };
  const Description = ({
    service,
    checkout,
  }: {
    service: any;
    checkout: React.ReactNode;
  }) => {
    return (
      <div className="bg-white max-w-md rounded-md p-8 space-y-3 relative">
        <p className="font-bold text-2xl">{service.name}</p>
        <p>{service.description}</p>
        <button
          onClick={() => appContext?.setModal(null)}
          className="absolute top-3 right-5 outline-none text-red-400 rounded-full p-1 bg-red-400/5"
        >
          <IoMdCloseCircleOutline size={20} />
        </button>
        {checkout}
      </div>
    );
  };
  return (
    <div
      title={service.description}
      className="bg-white shadow rounded-lg p-6 xl:p-8 w-full hover:shadow-lg transition-all relative"
    >
      {/* Profile Image */}
      <div className="flex items-center space-x-4">
        <Image
          src={
            service.profile.user.image
              ? `${process.env.NEXT_PUBLIC_API_URL}${service.profile.user.image}`
              : "/profile-demo.png"
          }
          alt={"profile"}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold text-xl text-gray-800 notranslate">
            <Link href={`/beauticians/${service.profileId}`}>
              {service?.profile?.user?.name}
            </Link>
          </h3>
          <p className="text-sm text-gray-500 notranslate">
            {service.categoryName}
          </p>
        </div>
      </div>
      <h2 className="mt-4 text-2xl font-bold text-gray-900 notranslate">
        {service.name}
      </h2>
      <p
        onClick={() =>
          appContext?.setModal(
            <Description
              service={service}
              checkout={
                <div className="mt-4 text-center ">
                  <button
                    onClick={handleCheckout}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Checkout
                  </button>
                </div>
              }
            />
          )
        }
        className="mt-2 text-gray-700 line-clamp-3 cursor-pointer"
      >
        {service.description}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-semibold text-green-600">
          €{service.price}
        </span>
        <span className="text-sm text-gray-500 ">{service.time} minutes</span>
      </div>
      <div className="mt-4 text-center ">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ServiceCart;
