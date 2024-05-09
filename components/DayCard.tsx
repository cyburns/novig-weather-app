import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Air, WaterDropOutlined } from "@mui/icons-material";
import {
  kmPerHourToMilesPerHour,
  celsiusToFahrenheit,
  getOrdinal,
} from "@/hooks/utils";
import { WeatherData } from "@/constants/Types";

interface DayCardProps {
  weatherData: WeatherData;
  selectedDay: string;
  dayIndex: number;
}

const DayCard = ({ weatherData, selectedDay, dayIndex }: DayCardProps) => {
  const { days } = weatherData;
  const day = days[dayIndex];
  const { datetime, icon, conditions, tempmax, windspeed, humidity } = day;

  return (
    <div className="flex flex-col">
      <h1 className="text-white text-xl lg:text-4xl capitalize mb-5 text-center font-bold">
        {dayIndex === 0 ? (
          <span>
            This {selectedDay} the {getOrdinal(datetime)}
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
          <h1 className="text-white text-md font-semibold lg:text-2xl mt-4">
            {conditions} {celsiusToFahrenheit(tempmax)}°F
          </h1>
          <div className="flex ">
            <Air
              className="text-white mt-4 mr-2"
              sx={{ fontSize: 25, color: "#fff" }}
            />
            <h1 className="text-white text-xs lg:text-xl mt-4">
              winds {kmPerHourToMilesPerHour(windspeed)} mph
            </h1>
          </div>
          <div className="flex flex-row">
            <WaterDropOutlined
              className="text-white mt-4 mr-2"
              sx={{ fontSize: 25, color: "#fff" }}
            />
            <h1 className="text-white text-xs lg:text-xl mt-4">
              humidity {humidity}%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
