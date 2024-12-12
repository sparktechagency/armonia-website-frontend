import React from "react";

export default function AddService() {
  return (
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-gray-800 text-lg font-medium mb-4">
          Edit Service Name
        </h2>
        <form>
          {/* Service Name Input */}
          <div className="mb-4">
            <label
              htmlFor="service-name"
              className="block text-sm font-medium text-gray-600"
            >
              Add Service
            </label>
            <input
              id="service-name"
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
              Change Category
            </label>
            <select
              id="category"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Filter category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
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
                id="price"
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
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="30min"
              />
            </div>
          </div>

          {/* Save Changes Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Change
          </button>
        </form>
      </div>
  );
}
