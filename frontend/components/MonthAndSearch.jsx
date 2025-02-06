import React from "react";

const MonthAndSearch = ({
  onSearchChange,
  selectMonth,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  return (
    <div className="flex justify-between m-5">
      {/* Search Box */}
      <div className="bg-amber-400 font-semibold rounded-xl px-3 flex items-center">
        <input
          className="bg-white rounded-xl p-2 focus:outline-none"
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search Transactions"
        />
        <button className="bg-green-500 rounded-xl p-3 ml-2" onClick={onClear}>
          Clear
        </button>
      </div>

      {/* Month Selector */}
      <div className="container max-w-max bg-amber-400 rounded-xl px-2 py-2">
      <span className="font-bold">Select Month :</span>
        <select
          className="bg-amber-100 p-1 font-semibold rounded-xl "
          value={selectMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthAndSearch;
