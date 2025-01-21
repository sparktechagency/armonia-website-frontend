import React from "react";

export default function page() {
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Earning
      </h1>
      <div className="px-2 mt-5">
        <div className="lg:flex items-center justify-between">
          <div className="bg-primary text-white text-center py-6 rounded-lg shadow-md max-w-md w-full mx-auto bg-blue-500">
            <h1 className="text-lg font-bold">Your balance</h1>
            <p className="text-4xl font-semibold mt-2">$340</p>
          </div>

          {/* Withdraw Section */}
          <div className="max-w-md mx-auto mt-6 text-center">
            <input
              type="text"
              placeholder="Enter your amount here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-opacity-90 bg-blue-500">
              Withdraw Now
            </button>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-8 w-full max-w-[100vw] overflow-scroll">
          <h2 className="text-xl font-bold mb-4">History</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-light-gray text-primary">
                <th className="py-2 px-4 border">Transaction History</th>
                <th className="py-2 px-4 border">Transaction ID</th>
                <th className="py-2 px-4 border">Date & Time</th>
                <th className="py-2 px-4 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="odd:bg-white even:bg-light-gray">
                    <td className="py-2 px-4 border">
                      {index === 0 ? "Withdraw" : "William Send"}
                    </td>
                    <td className="py-2 px-4 border">20*********4560</td>
                    <td className="py-2 px-4 border whitespace-pre">03-16-25 | 01:30 AM</td>
                    <td
                      className={`py-2 px-4 border font-semibold ${
                        index === 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      $45
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
