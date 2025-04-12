"use client";

import { FormEvent, useContext } from "react";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import { TCategory } from "@/type/category.type";
import { useCreateServiceMutation } from "@/redux/features/services/services.api";
import Swal from "sweetalert2";
import { context } from "@/app/Context";
import { toast } from "react-toastify";
import { BtnSpenner } from "./Spinner";

type FormValues = {
  [key: string]: FormDataEntryValue | undefined;
};

const timeDurations = [
  { label: "0 hours 30 min", value: 30 },
  { label: "1 hours 00 min", value: 60 },
  { label: "1 hours 30 min", value: 90 },
  { label: "2 hours 00 min", value: 120 },
  { label: "2 hours 30 min", value: 150 },
  { label: "3 hours 00 min", value: 180 },
  { label: "3 hours 30 min", value: 210 },
  { label: "4 hours 00 min", value: 240 },
  { label: "5 hours 00 min", value: 300 },
];

export default function AddService() {
  const appContext = useContext(context);
  const { data, isLoading } = useCategoriesQuery(undefined);
  const [mutation, { isLoading: muLoading }] = useCreateServiceMutation();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues: FormValues = Object.fromEntries(formData.entries());
    const price = Number(formValues.amount);
    const time = Number(formValues.duration);
    try {
      if (isNaN(price)) {
        throw new Error("Price will be number!");
      }
      await mutation({ ...formValues, price, time }).unwrap();
      appContext?.setModal(null);
      toast.success("Service created successfully!");
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
  console.log(muLoading);
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-96">
      <h2 className="text-gray-800 text-lg font-medium mb-4">
        Add new service
      </h2>
      <form onSubmit={onSubmit}>
        {/* Service Name Input */}
        <div className="mb-4">
          <label
            htmlFor="service-name"
            className="block text-sm font-medium text-gray-600"
          >
            Service Name
          </label>
          <input
            required
            id="service-name"
            name="name"
            type="text"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add Service"
          />
        </div>

        {/* Change Category Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            required
            id="category"
            name="categoryName"
            defaultValue={""}
            className="w-full mt-1 px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              {isLoading ? "loading..." : "Select Category"}
            </option>
            {data?.data?.map((item: TCategory) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price and Time Inputs */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price
            </label>
            <input
              required
              id="price"
              name="amount"
              type="text"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="€ 10"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-600"
            >
              Time
            </label>
            <select
              required
              id="time"
              name="duration"
              defaultValue={""}
              className="w-full mt-1 px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                {"Select time"}
              </option>
              {timeDurations?.map((item) => (
                <option key={item.label} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            required
            id="description"
            name="description"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Des...."
          />
        </div>

        {/* Save Changes Button */}
        <button
          disabled={muLoading}
          type="submit"
          className="w-full bg-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center gap-1.5"
        >
          {!!muLoading && <BtnSpenner />} Save
        </button>
      </form>
    </div>
  );
}
