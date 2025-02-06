import React from "react";

const PerPage = ({ selectPages, onChange }) => {
  const Pages = [1, 2, 4, 8, 10, 12, 15, 20, 25, 30];

  return (
    <div className="bg-[#a7d8ff] rounded-xl p-2">
      <span>Per page:</span>
      <select
        className="border border-gray-950 rounded-md py-1 focus:outline-none"
        value={selectPages}
        onChange={onChange}
      >
        {Pages.map((page, index) => (
          <option key={index} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PerPage;
