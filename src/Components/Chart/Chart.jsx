import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
// import { lineChart } from "chart.js";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  // line chart using react-chartjs-2

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};

export default Chart;
