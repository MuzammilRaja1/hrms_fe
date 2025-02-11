import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Table = ({ data, headers, itemsPerPageOptions = [10, 20, 30] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="overflow-x-auto font-sans p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-customblue text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="p-4 text-center text-sm font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {displayedData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="p-4 text-sm text-center">{item.id}</td>
              <td className="p-4 text-sm text-center">{item.name}</td>
              <td className="p-4 text-sm text-center">{item.age}</td>
              <td className="p-4 text-sm text-center">{item.section}</td>
              <td className="p-4 text-sm text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaRegEdit className="text-2xl" />
                </button>
                <button className="text-red-500 hover:text-red-700 ml-2">
                  <MdDeleteOutline className="text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center p-4">
        <select
          className="text-sm text-gray-500 border border-gray-400 rounded h-8 px-1 mx-4 outline-none"
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          {itemsPerPageOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <button
            className="p-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <MdKeyboardArrowLeft />
          </button>
          <span className="text-sm">
            {currentPage} of {totalPages}
          </span>
          <button
            className="p-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
