import AddService from "@/components/AddService";
import Button from "@/components/Button";
import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function page() {
  const data = [
    {
      id: "#001",
      serviceName: "Daily make up",
      category: "Make up",
      price: "€47",
    },
    {
      id: "#002",
      serviceName: "Daily make up",
      category: "Make up",
      price: "€47",
    },
    {
      id: "#003",
      serviceName: "Daily make up",
      category: "Make up",
      price: "€47",
    },
    {
      id: "#004",
      serviceName: "Daily make up",
      category: "Make up",
      price: "€47",
    },
    {
      id: "#005",
      serviceName: "Daily make up",
      category: "Make up",
      price: "€47",
    },
    {
      id: "#006",
      serviceName: "Daily make up",
      category: "Make up",
      price: "€47",
    },
  ];

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
          <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Filter category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
          <input
            type="text"
            placeholder="Search by service name..."
            className="flex-grow ml-2 max-w-xs bg-white border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead className="bg-[#FFFBEF] text-[#142F62]">
            <tr>
              <th className="p-3 border border-gray-300">SI NO.</th>
              <th className="p-3 border border-gray-300">Service Name</th>
              <th className="p-3 border border-gray-300">Category</th>
              <th className="p-3 border border-gray-300">Price</th>
              <th className="p-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-[#E7F8FF] even:bg-gray-50">
                <td className="p-3 border border-gray-300">{item.id}</td>
                <td className="p-3 border border-gray-300">
                  {item.serviceName}
                </td>
                <td className="p-3 border border-gray-300">{item.category}</td>
                <td className="p-3 border border-gray-300">{item.price}</td>
                <td className="p-3 border border-gray-300 space-x-2 md:space-x-4 whitespace-pre">
                  <FiEdit3 size={18} className="inline-block" />
                  <MdDeleteOutline size={18} className="inline-block" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
