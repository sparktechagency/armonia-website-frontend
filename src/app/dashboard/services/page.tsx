import AddService from "@/components/AddService";
import Button from "@/components/Button";
import React from "react";

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
        <Button className="max-w-xl w-full py-3 font-semibold rounded my-5 text-2xl font-Playfair_Display" openModalOnClick={AddService()}>
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
                <td className="p-3 border border-gray-300 flex space-x-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H19ZM18.003 3.58492L19.4151 4.99703C20.195 5.77692 20.195 7.04137 19.4151 7.82126L11.1778 16.0586C11.025 16.2114 10.8268 16.3105 10.6129 16.341L6 17L6.65899 12.3871C6.68954 12.1732 6.78864 11.975 6.94141 11.8222L15.1787 3.58492C15.9586 2.80503 17.2231 2.80503 18.003 3.58492ZM16.5909 4.99703L8.58911 12.9988L8.35399 14.646L10.0012 14.4109L18.003 6.40914L16.5909 4.99703Z"
                      fill="#697586"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z"
                      fill="#697586"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
