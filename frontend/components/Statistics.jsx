// Statistics.jsx
import React, { useEffect, useState } from "react";

const Statistics = ({ selectMonth }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(
          `https://roxiler-assignment-backend.vercel.app/api/statistics?month=${selectMonth}`
        );
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, [selectMonth]);

  return (
    <div className="pb-5">
      <div className=" font-bold text-black text-4xl text-center m-5">
        Statistics - {selectMonth}
      </div>
      <div className="flex justify-center m-5">
        <div className=" container max-w-max p-8 bg-[rgba(185,229,255,0.94)] rounded-4xl">
          <div className="flex flex-row flex-wrap gap-5">
            <div className="text-3xl">
              <h3 className=" font-bold py-2">Total Sale Amount -</h3>
              <h3 className=" font-bold py-2">Total Sold Items -</h3>
              <h3 className=" font-bold py-2">Total Not Sold Items -</h3>
            </div>
            <div className="text-3xl ">
              <h3 className=" font-bold py-2">{statistics.totalSaleAmount}</h3>
              <h3 className=" font-bold py-2">{statistics.totalSoldItems}</h3>
              <h3 className=" font-bold py-2">{statistics.totalNotSoldItems}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
