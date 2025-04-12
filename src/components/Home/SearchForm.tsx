"use client";
import React, { FormEvent, useCallback } from "react";
import Button from "../Button";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import { TCategory } from "@/type/category.type";
import { useRouter } from "next/navigation";
import { IoLocationOutline } from "react-icons/io5";

type FormValues = {
  [key: string]: FormDataEntryValue | undefined;
};

const SearchForm = () => {
  const router = useRouter();
  const { data, isLoading } = useCategoriesQuery(undefined, {
    // refetchOnFocus: true,
    // refetchOnReconnect: true,
    // refetchOnMountOrArgChange: true,
  });
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const formValues: FormValues = Object.fromEntries(formData.entries());
      const params = Object.entries({
        ...formValues,
        // date: formValues?.date
        //   ? new Date(formValues?.date as string).toLocaleDateString("en-US", {
        //       weekday: "long",
        //     })
        //   : "",
      }).filter((item) => item[1] !== undefined && item[1]) as [
        string,
        string
      ][];
      const queryString = new URLSearchParams(params).toString();
      router.push(`/beauticians${queryString ? `?${queryString}` : ""}`);
    },
    [router]
  );
  return (
    <div className="px-4 w-full">
      <div className="font-Playfair_Display text-center text-white mb-10 mx-auto space-y-3">
        <p className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light uppercase">
          Welcome to Armonia
        </p>
        <p className="font-medium text-2xl md:text-3xl lg:text-4xl">
        Your At-Home Beauty and Wellness concierge in the Algarve.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="px-3 py-10 lg:px-10 rounded-xl bg-[#ffffff3f] flex flex-col items-center md:mx-auto max-w-2xl"
      >
        <label
          htmlFor="category"
          className="w-full max-w-md mx-auto bg-white pr-3 lg:pr-[18px] mt-3 mb-3 rounded-2xl"
        >
          <select
            defaultValue={""}
            name="category"
            id="category"
            className="h-12 w-full px-4 focus:outline-none rounded-2xl "
          >
            <option value="" disabled>
              {!isLoading ? "Choose Service" : "loading..."}
            </option>
            {data?.data?.map((item: TCategory) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="" className="max-w-md w-full relative">
          <IoLocationOutline
            size={18}
            className="absolute top-4 right-3 lg:right-4"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="h-12 w-full px-5 focus:outline-none rounded-2xl mb-3 placeholder:text-black"
          />
        </label>

        <input
          type="date"
          name="date"
          placeholder="Choose Date"
          // onChange={(e) => setDate(e.target.value)}
          // onChange={(e)=> new Date(e.target.value).toLocaleDateString("en-US", { weekday: "long" })}
          defaultValue={new Date().toISOString().split("T")[0]}
          min={new Date().toISOString().split("T")[0]}
          className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-5"
        />

        <Button
          type="submit"
          className="w-full max-w-md rounded-2xl"
          paddingY={12}
        >
          Book Now
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
