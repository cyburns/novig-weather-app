import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Air, WaterDropOutlined } from "@mui/icons-material";

const DayCard = ({ weatherData, selectedDay, dayIndex }: any) => {
  const getOrdinal = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const suffix = ["th", "st", "nd", "rd"];
    const relevantDigits = day < 30 ? day % 20 : day % 30;
    const suffixIndex = relevantDigits <= 3 ? relevantDigits : 0;

    return day + suffix[suffixIndex];
  };

  const celsiusToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };

  const kmPerHourToMilesPerHour = (kmPerHour: number) => {
    return Math.floor(kmPerHour * 0.621371);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-white text-2xl capitalize mb-5">
        {dayIndex === 0 ? (
          <span>
            {weatherData.address} this {selectedDay}
          </span>
        ) : (
          <span>
            Next {selectedDay} the{" "}
            {getOrdinal(weatherData.days[dayIndex].datetime)}
          </span>
        )}
      </h1>
      <div className="flex flex-row items-center">
        <WeatherIcon icon={weatherData.days[dayIndex].icon} />
        <div className="ml-5">
          <h1 className="text-white text-xl mt-4">
            {weatherData.days[dayIndex].conditions}{" "}
            {celsiusToFahrenheit(weatherData.days[dayIndex].tempmax)}°F
          </h1>
          <h1 className="text-white text-xl mt-4">
            <Air />
            <span className="ml-2">
              Winds{" "}
              {kmPerHourToMilesPerHour(weatherData.days[dayIndex].windspeed)}{" "}
              mph
            </span>
          </h1>
          <h1 className="text-white text-xl mt-4">
            <WaterDropOutlined />
            <span className="ml-2">
              Humidity {weatherData.days[dayIndex].humidity}%
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
