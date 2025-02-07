import React, { useEffect, useState, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = ({ selectMonth }) => {
  const [barChartData, setBarChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBarChartData = useCallback(async () => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://roxiler-assignment-backend.vercel.app/api/barChart?month=${selectMonth}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch bar chart data.");
      }

      const data = await response.json();
      const labels = data.map((item) => item.range);
      const counts = data.map((item) => item.count);

      setBarChartData({
        labels,
        datasets: [
          {
            label: "Number of Items Sold on the basis of Price Range",
            backgroundColor: "rgb(8, 144, 255)",
            borderWidth: 1,
            hoverBackgroundColor: "rgb(108,229,10)",
            data: counts,
          },
        ],
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, [selectMonth]);

  useEffect(() => {
    fetchBarChartData();
  }, [fetchBarChartData]);

  return (
    <div className="m-5 w-full max-w-6xl mx-auto justify-center bg-[#edf7f7] rounded-xl">
      <h2 className="font-bold text-black text-4xl text-center m-5">
        Bar Chart Stats - {selectMonth}
      </h2>
      <div className="m-5">
        {loading ? (
          <p>Loading chart data...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Bar
            data={barChartData}
            options={{
              plugins: {
                legend: { display: true, position: "right" },
              },
              scales: {
                x: { title: { display: true, text: "Price Range" } },
                y: { title: { display: true, text: "Number of Items" } },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BarChart;
