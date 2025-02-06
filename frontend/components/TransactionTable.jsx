import React from "react";
import "../src/App.css";
import PerPage from "./PerPage.jsx";

const TransactionTable = ({
  transactions,
  onNextPage,
  onPreviousPage,
  page,
  selectPages,
  onChange,
}) => {
  return (
    <div className="m-6">
      <div className="overflow-x-auto flex flex-col container max-w-max bg-[#e6d02a] rounded-xl my-10">
        <div className="sm:mx-6 lg:mx-8">
          <div className="py-10 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full bg-[#d3f2ff] text-center">
                <thead className="border-b">
                  <tr>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">ID</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">Title</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">Description</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">Price</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">Category</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">Sold</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4">Image</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b">
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {transaction._id}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal break-words">
                        {transaction.title}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal break-words">
                        {transaction.description}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {transaction.price}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal break-words">
                        {transaction.category}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {transaction.sold}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        Not Available
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-row justify-between font-bold mx-5 my-10">
        <div className="text-center text-lg bg-[#a7d8ff] rounded-xl p-2">
          Page No: {page} of {selectPages}
        </div>
        <div className="space-x-4 flex items-center">
          <button
            onClick={onPreviousPage}
            className="text-xl px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition flex items-center gap-2"
          >
            <i className="ri-skip-left-line text-gray-600"></i> Previous
          </button>
          <span>|</span>
          <button
            onClick={onNextPage}
            className="text-xl px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition flex items-center gap-2"
          >
            Next <i className="ri-skip-right-line text-gray-600"></i>
          </button>
        </div>
        <PerPage selectPages={selectPages} onChange={onChange} />
      </div>
    </div>
  );
};

export default TransactionTable;
