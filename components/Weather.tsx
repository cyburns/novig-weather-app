"use client";

import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem, LinearProgress } from "@mui/material";
import { timePeriodsArray } from "@/constants/Data";
import {
  ExpandMore,
  Search,
  PlaceOutlined,
  ArrowForwardIos,
  ArrowBackIos,
  AccessTimeOutlined,
} from "@mui/icons-material";
import DayCard from "./DayCard";
import Chart from "./Chart";
import { dayAndDateOfTheWeekArray } from "@/hooks/useGetCurrentWeekArray";
import { WeatherProps } from "@/constants/Types";
import { WeatherData } from "@/constants/Types";

const Weather = ({ setWeatherBackgroundColors }: WeatherProps) => {
  //User feedback state
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);

  //Filter states
  const [timeOfDay, setTimeOfDay] = useState<string>("Anytime");
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const [searchInputLocation, setSearchInputLocation] =
    useState<string>("New York, New York");
  const [dateArrayIndex, setDateArrayIndex] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<string>(
    dayAndDateOfTheWeekArray[dateArrayIndex].day
  );

  //API states
  const [startDate, setStartDate] = useState<string>(
    dayAndDateOfTheWeekArray[dateArrayIndex].startDate
  );
  const [endDate, setEndDate] = useState<string>(
    dayAndDateOfTheWeekArray[dateArrayIndex].endDate
  );

  const open = Boolean(anchorEl);
  const openTwo = Boolean(anchorElTwo);
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    searchInputLocation
  )}/${startDate}/${endDate}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    index === 0
      ? setAnchorEl(event.currentTarget)
      : setAnchorElTwo(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElTwo(null);
  };

  const handleWeatherSearch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!data) {
        setErrorMessage("No weather data found for the location you entered.");
      }

      setWeatherData(data);
      setWeatherBackgroundColors(data.days[0].icon);
    } catch (error) {
      setErrorMessage("Error getting data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChevonClick = (motionDirection: "left" | "right") => {
    const lastIndex = dayAndDateOfTheWeekArray.length - 1;

    let newIndex = dateArrayIndex;
    if (motionDirection === "left") {
      newIndex -= 1;
    } else if (motionDirection === "right") {
      newIndex += 1;
    }

    if (newIndex < 0 || newIndex > lastIndex) return;

    setSelectedDay(dayAndDateOfTheWeekArray[newIndex].day);
    setStartDate(dayAndDateOfTheWeekArray[newIndex].startDate);
    setEndDate(dayAndDateOfTheWeekArray[newIndex].endDate);
    setDateArrayIndex(newIndex);
  };

  useEffect(() => {
    handleWeatherSearch();

    console.log(dayAndDateOfTheWeekArray);
  }, [startDate, endDate]);

  return (
    <div className="w-full flex flex-col max-w-7xl mx-auto mt-5">
      <div className="flex md:flex-row flex-col justify-between w-full px-8">
        <div className="flex flex-row ">
          <input
            type="text"
            className="bg-white bg-opacity-10 text-white placeholder-white  rounded-md lg:w-96 w-[14.6rem] h-12 px-5 py-2 border-opacity-40 hover:bg-opacity-5 transition"
            placeholder="Search..."
            value={searchInputLocation}
            onChange={(e) => setSearchInputLocation(e.target.value)}
          />
          <Button
            className="ml-3 text-white bg-white bg-opacity-10 hover:bg-opacity-5"
            onClick={handleWeatherSearch}
          >
            <Search className=" text-white" sx={{ fontSize: 30 }} />
          </Button>
        </div>

        <div className="flex flex-row  mt-3 md:mt-0">
          <div className="bg-white bg-opacity-10 rounded-md hover:bg-opacity-5 transition mr-3">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e, 0)}
              className="text-white hover:text-white/50 transition text-md pr-5 rounded-md "
              sx={{ textTransform: "capitalize" }}
            >
              <ExpandMore fontSize="large" />
              Every {selectedDay}
            </Button>
            <Menu
              disableScrollLock={false}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {dayAndDateOfTheWeekArray.map((day, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setSelectedDay(day.day);
                    setStartDate(day.startDate);
                    setEndDate(day.endDate);
                    setDateArrayIndex(index);
                    handleClose();
                  }}
                >
                  {day.day}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="bg-white bg-opacity-10 rounded-md hover:bg-opacity-5 transition">
            <Button
              id="demo-positioned-button-two"
              aria-controls={openTwo ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openTwo ? "true" : undefined}
              onClick={(e) => handleClick(e, 1)}
              className="text-white hover:text-white/50 transition text-md pr-5 rounded-md"
              sx={{ textTransform: "capitalize" }}
            >
              <ExpandMore fontSize="large" />
              {timeOfDay}
            </Button>
            <Menu
              disableScrollLock={false}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorElTwo}
              open={openTwo}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {timePeriodsArray.map((time, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setTimeOfDay(time);
                    handleClose();
                  }}
                >
                  {time}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-white bg-opacity-10 rounded-xl mt-5 px-5" />

      <div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <LinearProgress />
          </div>
        ) : (
          <>
            {!weatherData ? (
              <div className="flex justify-center mt-56">
                <h1>{errorMessage}</h1>
              </div>
            ) : (
              <div className="mt-0 lg:mt-10">
                <div className="flex flex-row justify-between items-center lg:mx-0 mx-2">
                  <div
                    className={dateArrayIndex === 0 ? "invisible" : "visible"}
                  >
                    <div
                      className="bg-white rounded-full bg-opacity-10 flex justify-center items-center hover:bg-opacity-5 transition"
                      onClick={() => handleChevonClick("left")}
                    >
                      <ArrowBackIos
                        sx={{ fontSize: 31, color: "#fff" }}
                        className="m-2 pl-2"
                      />
                    </div>
                  </div>

                  <div className="flex lg:flex-row flex-col justify-between">
                    <div className="lg:mt-0 mt-10 mr-0 lg:mr-5 flex justify-center items-center flex-col">
                      <DayCard
                        weatherData={weatherData}
                        selectedDay={selectedDay}
                        dayIndex={0}
                      />
                      <Chart
                        weatherData={weatherData}
                        timeOfDay={timeOfDay}
                        dayIndex={0}
                      />
                    </div>

                    <div className="lg:mt-0 mt-10 ml-0 lg:ml-5 flex justify-center items-center flex-col lg:mb-0 mb-20">
                      <DayCard
                        weatherData={weatherData}
                        selectedDay={selectedDay}
                        dayIndex={6}
                      />
                      <Chart
                        weatherData={weatherData}
                        timeOfDay={timeOfDay}
                        dayIndex={6}
                      />
                    </div>
                  </div>
                  <div
                    className={dateArrayIndex === 6 ? "invisible" : "visible"}
                  >
                    <div
                      className="bg-white rounded-full bg-opacity-10 p-2 flex justify-center items-center hover:bg-opacity-5 transition"
                      onClick={() => handleChevonClick("right")}
                    >
                      <ArrowForwardIos sx={{ fontSize: 25, color: "#fff" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
