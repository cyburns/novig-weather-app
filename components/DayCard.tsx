import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Air, WaterDropOutlined } from "@mui/icons-material";
import {
  kmPerHourToMilesPerHour,
  celsiusToFahrenheit,
  getOrdinal,
} from "@/hooks/utils";

const DayCard = ({ weatherData, selectedDay, dayIndex }: any) => {
  const { days, address } = weatherData;
  const day = days[dayIndex];
  const { datetime, icon, conditions, tempmax, windspeed, humidity } = day;

  return (
    <div className="flex flex-col">
      <h1 className="text-white text-lg lg:text-2xl capitalize mb-5 text-center">
        {dayIndex === 0 ? (
          <span>
            {address} this {selectedDay}
          </span>
        ) : (
          <span>
            Next {selectedDay} the {getOrdinal(datetime)}
          </span>
        )}
      </h1>
      <div className="flex flex-row justify-center items-center">
        <WeatherIcon icon={icon} />
        <div className="ml-5">
          <h1 className="text-white text-sm lg:text-xl mt-4">
            {conditions} {celsiusToFahrenheit(tempmax)}°F
          </h1>
          <h1 className="text-white text-sm lg:text-xl mt-4">
            <Air />
            <span className="ml-2">
              Winds {kmPerHourToMilesPerHour(windspeed)} mph
            </span>
          </h1>
          <h1 className="text-white text-sm lg:text-xl mt-4">
            <WaterDropOutlined />
            <span className="ml-2">Humidity {humidity}%</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
