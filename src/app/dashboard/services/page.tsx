"use client";
import AddService from "@/components/AddService";
import Button from "@/components/Button";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { sweetAlertConfirmation } from "@/lib/alert";
import { debounce } from "@/lib/debounce";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/features/services/services.api";
import { useAppSelector } from "@/redux/hook";
import { TCategory } from "@/type/category.type";
import { TUniObject } from "@/type/index.type";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function Page() {
  const [query, setQuery] = useState({ category: "", search: "" });
  const { user } = useAppSelector((state) => state.auth);
  const [mutation] = useDeleteServiceMutation();
  const { data, isLoading: cateLoading } = useCategoriesQuery(undefined);
  const {
    data: services,
    isLoading,
    isError,
  } = useServicesQuery(
    [
      { name: "profileId", value: user?.profileId },
      { name: "page", value: 1 },
      { name: "limit", value: 100 },
      ...Object.entries(query)
        .filter((item) => item[1])
        .map(([name, value]) => ({ name, value: value.toString() })),
    ],
    {
      skip: !user?.id,
    }
  );
  // , {name: "name", value: query.category}
  const debounceSearch = debounce((value: string) => {
    setQuery((c) => ({ ...c, page: 1, search: value }));
  }, 500);

  // console.log(services)
  const deleteService = async (itemId: string) => {
    const toastId = toast.loading("delete processing...", {
      position: "bottom-center",
    });
    try {
      await mutation(itemId).unwrap();
      toast.success("Delete Successful");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text:
          error.message ||
          error?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      toast.dismiss(toastId);
    }
  };
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        My Services
      </h1>
      <div className="flex flex-col items-center">
        <Button
          className="max-w-xl w-full py-3 font-semibold rounded my-5 text-2xl font-Playfair_Display"
          openModalOnClick={AddService()}
        >
          Add Service
        </Button>
      </div>
      <div>
        <div className="w-full flex items-center justify-end bg-gray-200 p-2 rounded">
          <select
            onChange={(e) =>
              setQuery((c) => ({ ...c, category: e.target.value }))
            }
            defaultValue={""}
            className="bg-white border border-gray-300 text-gray-700 text-sm rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">
              {cateLoading ? "loading..." : "All Category"}
            </option>
            {data?.data?.map((item: TCategory) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            onChange={(e) => debounceSearch(e.target.value)}
            placeholder="Search by service name..."
            className="flex-grow ml-2 max-w-xs bg-white border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <LoaderWraperComp
          isError={isError}
          isLoading={isLoading}
          dataEmpty={services?.data?.length < 1}
          className="min-h-[70vh]"
        >
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-200">
              <thead className="bg-[#FFFBEF] text-[#142F62]">
                <tr>
                  <th className="p-3 border border-gray-300">ID.NO.</th>
                  <th className="p-3 border border-gray-300">Service Name</th>
                  <th className="p-3 border border-gray-300">Category</th>
                  <th className="p-3 border border-gray-300">Price</th>
                  <th className="p-3 border border-gray-300 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {services?.data?.map((item: TUniObject, index: number) => (
                  <tr
                    key={index}
                    className="hover:bg-[#E7F8FF] even:bg-gray-50"
                  >
                    <td className="p-3 border border-gray-300">{item.id}</td>
                    <td className="p-3 border border-gray-300">{item.name}</td>
                    <td className="p-3 border border-gray-300">
                      {item.categoryName}
                    </td>
                    <td className="p-3 border border-gray-300 whitespace-pre notranslate">
                      ${item.price}
                    </td>
                    <td className="p-3 border border-gray-300 space-x-2 md:space-x-4 whitespace-pre text-center">
                      <MdDeleteOutline
                        onClick={() =>
                          sweetAlertConfirmation({
                            func: () => deleteService(item.id),
                            object: "delete the service",
                          })
                        }
                        size={20}
                        className="inline-block hover:text-red-500 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LoaderWraperComp>
      </div>
    </section>
  );
}
