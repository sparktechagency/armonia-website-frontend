"use client";
import React, { FormEvent, useCallback } from "react";
import Button from "../Button";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import { TCategory } from "@/type/category.type";
import { useRouter } from "next/navigation";
type FormValues = {
  [key: string]: FormDataEntryValue | undefined;
};

const SearchForm = () => {
  const router = useRouter();
  const { data, isLoading } = useCategoriesQuery(undefined);

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
      }).filter(([_, value]) => value !== undefined && value) as [
        string,
        string
      ][];
      const queryString = new URLSearchParams(params).toString();
      router.push(`/beauticians${queryString ? `?${queryString}` : ""}`);
    },
    [router]
  );
  return (
    <form
      onSubmit={onSubmit}
      className="px-3 py-10 lg:px-10 rounded-xl bg-[#ffffffb3] flex flex-col items-center mx-4"
    >
      <h3 className="font-Playfair_Display font-semibold text-2xl md:text-3xl text-center text-blue-500 mb-10">
        Book five star beauty service, direct to your door
      </h3>
      <label
        htmlFor="category"
        className="w-full max-w-md mx-auto bg-white pr-3 lg:pr-4 mb-3 rounded-2xl"
      >
        <select
          defaultValue={""}
          name="category"
          id="category"
          className="h-12 w-full px-5 focus:outline-none rounded-2xl "
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
      </label>
      <input
        type="number"
        name="postcode"
        placeholder="Postcode"
        className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
      />
      <input
        type="date"
        name="date"
        // onChange={(e)=> new Date(e.target.value).toLocaleDateString("en-US", { weekday: "long" })}
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
  );
};

export default SearchForm;
