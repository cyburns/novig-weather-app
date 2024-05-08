import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  celsiusToFahrenheit,
  formatTime,
  filterTimeOfDay,
} from "@/hooks/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ weatherData, timeOfDay, dayIndex }: any) => {
  const { days } = weatherData;
  const { hours } = days[dayIndex];

  const filteredHourData = filterTimeOfDay(hours, timeOfDay);

  const dayTimeData = filteredHourData.map((day: any) =>
    formatTime(day.datetimeEpoch)
  );

  const dayTempData = hours.map((day: any) => celsiusToFahrenheit(day.temp));
  const dayPrecipData = hours.map((day: any) => day.precip);
  const dayUvIndexData = hours.map((day: any) => day.uvindex);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
  };

  const weatherDayData = {
    labels: dayTimeData,
    datasets: [
      {
        label: "Temperature",
        data: dayTempData,
        borderColor: "#f8c93e",
        color: "#fff",
      },
      {
        label: "Precipitation",
        data: dayPrecipData,
        borderColor: "#0290c8",
        color: "#fff",
      },
      {
        label: "UV Index",
        data: dayUvIndexData,
        borderColor: "#019b57",
        color: "#fff",
      },
    ],
  };

  return (
    <div className="w-[30rem] bg-white p-1 rounded-md bg-opacity-10">
      <Line options={options} data={weatherDayData} />
    </div>
  );
};

export default Chart;
