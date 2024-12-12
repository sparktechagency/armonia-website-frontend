import React from "react";

export default function page() {
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Service Request
      </h1>
      <div className=" mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className=" border-b-2 border-black">
              <tr className=" text-left">
                <th className="p-3 border-r-4">SI NO.</th>
                <th className="p-3 border-r-4">Beautician Name</th>
                <th className="p-3 border-r-4">Post Code</th>
                <th className="p-3 border-r-4">Price</th>
                <th className="p-3 border-r-4 text-right">
                  Appointment Date & Time
                </th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-b-2">
                <td className="p-3 border-r-4">1</td>
                <td className="p-3 border-r-4">Anilo Mari</td>
                <td className="p-3 border-r-4">213 48992201298</td>
                <td className="p-3 border-r-4">£ 100</td>
                <td className="p-3 border-r-4 text-right">
                  12/12/2021 12:00 PM
                </td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                    Cancel
                  </button>
                </td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td className="p-3 border-r-4">2</td>
                <td className="p-3 border-r-4">Anilo Mari</td>
                <td className="p-3 border-r-4">213 48992201298</td>
                <td className="p-3 border-r-4">£ 100</td>
                <td className="p-3 border-r-4 text-right">
                  12/12/2021 12:00 PM
                </td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                    Cancel
                  </button>
                </td>
              </tr>
              <tr className="border-t-2 border-b-2">
                <td className="p-3 border-r-4">3</td>
                <td className="p-3 border-r-4">Anilo Mari</td>
                <td className="p-3 border-r-4">213 48992201298</td>
                <td className="p-3 border-r-4">£ 100</td>
                <td className="p-3 border-r-4 text-right">
                  12/12/2021 12:00 PM
                </td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
