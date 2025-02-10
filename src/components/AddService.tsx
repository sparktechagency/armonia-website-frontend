"use client";

import { FormEvent, useContext, useState } from "react";
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

export default function AddService() {
  const appContext = useContext(context);
  const { data, isLoading } = useCategoriesQuery(undefined);
  const [mutation, { isLoading: muLoading }] = useCreateServiceMutation();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues: FormValues = Object.fromEntries(formData.entries());
    const price = Number(formValues.amount);
    try {
      if (isNaN(price)) {
        throw new Error("Price will be number!");
      }
      await mutation({ ...formValues, time: 30, price: price }).unwrap();
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
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-96">
      <h2 className="text-gray-800 text-lg font-medium mb-4">
        Edit Service Name
      </h2>
      <form onSubmit={onSubmit}>
        {/* Service Name Input */}
        <div className="mb-4">
          <label
            htmlFor="service-name"
            className="block text-sm font-medium text-gray-600"
          >
            Add Service
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
            <input
              id="time"
              type="text"
              readOnly
              value={"30min"}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="30min"
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center"
        >
          {muLoading ? <BtnSpenner /> : "Save Change"}
        </button>
      </form>
    </div>
  );
}
