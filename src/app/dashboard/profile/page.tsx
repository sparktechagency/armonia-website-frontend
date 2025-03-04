"use client";

import { context } from "@/app/Context";
import TimePicker from "@/components/Profile/TimePicker";
import ProfileCategory from "@/components/ProfileCategory";
import SetPassword from "@/components/SetPassword";
import { BtnSpenner } from "@/components/Spinner";
import Dayselector from "@/components/ui/Dayselector";
import { validateionTime } from "@/lib/helpers";
import {
  useUpdateImageNameMutation,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { useTimeSlotsQuery } from "@/redux/features/slots/slots.api";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { MdOutlineUpload } from "react-icons/md";
import { TbCloudUpload, TbEdit } from "react-icons/tb";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

type FormValues = {
  [key: string]: FormDataEntryValue | undefined;
};

export default function page() {
  const appContext = useContext(context);
  const { user } = useAppSelector((state) => state.auth);
  const [editable, setEditable] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const { data } = useTimeSlotsQuery(undefined);
  const [dispatch, { isLoading }] = useUpdateProfileMutation();
  const [imageDispatch, { isLoading: imageLoading }] =
    useUpdateImageNameMutation();
  // console.log(data);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues: FormValues = Object.fromEntries(formData.entries());
    try {
      const timeSlotIds =
        user?.type === "beautician" &&
        validateionTime({
          start: formValues.start as string,
          end: formValues.end as string,
          slots: data?.data || [],
        });
      const payload =
        user?.type === "beautician"
          ? {
              timeSlotIds,
              weekdays: selectedDays,
              postalCode: formValues.postalCode,
              bio: formValues.bio,
              category: formValues.category,
              phone: formValues.phone,
            }
          : null;
      await imageDispatch({
        body: formData,
      }).unwrap();
      if (user?.type === "beautician") {
        await dispatch({
          body: payload,
        }).unwrap();
      }
      toast.success("Update success!");
      setEditable(false);
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
  useEffect(() => {
    setSelectedDays(user?.weekDays || []);
    if (user?.type === "beautician" && !user?.postalCode) {
      Swal.fire({
        icon: "success",
        title: "Successfully Logged In",
        text: "Please update your profile with the necessary information to proceed.",
      });
    }
  }, [user]);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-yellow-50 w-full px-3 md:px-6 min-h-full pb-7 "
    >
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-3 md:px-5 py-4 text-white">
        My Profile
      </h1>
      <div className="mt-8 flex justify-between lg:mx-6 px-3">
        <div className="">
          {!!user?.category && (
            <ProfileCategory category={user?.category} withName={true} />
          )}
        </div>
        {editable ? null : (
          <button
            onClick={() =>
              appContext?.setModal(<SetPassword method={"change"} />)
            }
            type="button"
            className="bg-[#f1f3f7] text-black px-4 py-2.5 border font-bold rounded-md hover:bg-[#1F4B99] hover:text-white transition duration-300 text-sm md:text-base "
          >
            Change Password
          </button>
        )}
        {/* </Link> */}
      </div>
      <div className="p-5 rounded-lg shadow-sm lg:flex gap-6 md:mx-auto mt-2 mb-2">
        <div className="mb-4 relative overflow-hidden w-full max-w-80 lg:max-w-60 h-full lg:max-h-80">
          <Image
            height={300}
            width={300}
            src={
              imageFile
                ? URL.createObjectURL(imageFile)
                : user?.image
                ? `${process.env.NEXT_PUBLIC_API_URL}${user?.image}`
                : "/profile-demo.png"
            }
            alt="Profile Image"
            className="w-full h-full lg:object-center"
          />
          {editable && (
            <div className="h-full w-full bg-black/50 absolute top-0 left-0 flex justify-center items-center">
              <label htmlFor="image">
                <div className="outline-none p-3 rounded-full flex flex-col items-center text-sm font-normal text-white hover:text- drop-shadow cursor-pointer">
                  <TbCloudUpload size={28} className="text-white" />
                  Uplaod
                </div>
              </label>
              <input
                name="image"
                id="image"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setImageFile(e.target.files[0]);
                  }
                }}
                style={{ display: "none" }}
              />
            </div>
          )}
        </div>

        <div className="w-full">
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              disabled={!editable}
              defaultValue={user?.name}
              placeholder="Anilo Mari"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              disabled
              defaultValue={user?.email}
              placeholder="abc@gmail.com"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
            />
          </label>
          {user?.type === "beautician" ? (
            <>
              <label>
                Postal code
                <input
                  type="text"
                  required
                  name="postalCode"
                  disabled={!editable}
                  defaultValue={user?.postalCode}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
                />
              </label>
              <div>
                Available Days
                <Dayselector
                  selectedDays={selectedDays}
                  setSelectedDays={setSelectedDays}
                  editAble={!editable}
                />
              </div>
              <div className="grid lg:grid-cols-8 gap-5 mb-4">
                <div className="col-span-5">
                  Available for Slots
                  <div className="flex items-center gap-3">
                    {/* <input
                  onChange={(e) => console.log(e.target.value)}
                  type="time"
                  step="1800" 
                  defaultValue={"14:30"}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
                /> */}
                    <TimePicker
                      disabled={!editable}
                      defaultValue={user?.availableSlots?.[0]?.slot.start}
                      name="start"
                    />
                    <span>to</span>

                    <TimePicker
                      disabled={!editable}
                      defaultValue={user?.availableSlots?.at(-1)?.slot.end}
                      name="end"
                    />
                  </div>
                </div>
                <label className="col-span-3">
                  Duration
                  <input
                    disabled
                    type="text"
                    defaultValue={"30min"}
                    placeholder="30min"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
                  />
                </label>
              </div>
            </>
          ) : (
            <label>
              Phone
              <input
                type="text"
                name="phone"
                disabled={!editable}
                defaultValue={user?.phone}
                placeholder="+1 (555) 123-4567"
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
              />
            </label>
          )}
        </div>
      </div>
      {user?.type === "beautician" && (
        <label>
          Bio
          <textarea
            defaultValue={user?.bio}
            disabled={!editable}
            rows={4}
            name="bio"
            placeholder="Write anything..."
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
          />
        </label>
      )}
      <div className={"flex justify-center mt-14"}>
        {editable ? (
          <button
            type="submit"
            className="bg-[#1c3057] flex items-center text-white gap-2 py-2 px-6 border-2 font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 text-sm md:text-base"
          >
            {isLoading ? <BtnSpenner /> : <MdOutlineUpload size={20} />}
            Update
          </button>
        ) : (
          <div
            onClick={() => setEditable(true)}
            // type="button"
            className="bg-[#1c3057] flex items-center text-white gap-2 py-2 px-5 border-2 font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 text-sm md:text-base cursor-pointer"
          >
            <TbEdit size={20} />
            Edit Profile
          </div>
        )}
      </div>
    </form>
  );
}
