import React from "react";
import { Line } from "react-chartjs-2";
import useMediaQuery from "@mui/material/useMediaQuery";
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
import { WeatherData, HourlyWeather } from "@/constants/Types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  weatherData: WeatherData;
  timeOfDay: string;
  dayIndex: number;
}

const Chart = ({ weatherData, timeOfDay, dayIndex }: ChartProps) => {
  const smallScreenSize = useMediaQuery("(min-width:567px)");

  const { days } = weatherData;
  const { hours } = days[dayIndex];

  const filteredHourData: HourlyWeather[] = filterTimeOfDay(hours, timeOfDay);

  const dayTimeData: string[] = filteredHourData.map((hour: HourlyWeather) =>
    formatTime(hour.datetimeEpoch)
  );
  const dayTempData = hours.map((day: HourlyWeather) =>
    celsiusToFahrenheit(day.temp)
  );
  const dayPrecipData = hours.map((day: HourlyWeather) => day.precip);
  const dayUvIndexData = hours.map((day: HourlyWeather) => day.uvindex);

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

  const lineChartOptions = {
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
          boxWidth: 20,
          borderRadius: 100,
        },
      },
    },
    aspectRatio: smallScreenSize ? 2 : 1,
  };

  return (
    <div>
      <div className="w-[15rem] lg:w-[30rem] bg-white mt-10 p-1 rounded-md bg-opacity-10 ">
        <Line options={lineChartOptions} data={weatherDayData} />
      </div>
      <p className="text-center mt-2 text-white">{timeOfDay}</p>
    </div>
  );
};

export default Chart;
