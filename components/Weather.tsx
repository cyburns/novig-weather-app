"use client";

import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem, LinearProgress } from "@mui/material";
import { timePeriodsArray } from "@/constants/Data";
import {
  ExpandMore,
  Search,
  Send,
  ArrowForwardIos,
  ArrowBackIos,
} from "@mui/icons-material";
import DayCard from "./DayCard";
import Chart from "./Chart";
import { dayAndDateOfTheWeekArray } from "@/hooks/useGetCurrentWeekArray";

const Weather = ({ setWeatherBackgroundColors }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);
  const [timeOfDay, setTimeOfDay] = useState<string>("Anytime");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [searchInputLocation, setSearchInputLocation] =
    useState<string>("New York, New York");

  //to filter by seleted dat
  const [dateArrayIndex, setDateArrayIndex] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<string>(
    dayAndDateOfTheWeekArray[dateArrayIndex].day
  );
  const [startDate, setStartDate] = useState<string>(
    dayAndDateOfTheWeekArray[dateArrayIndex].startDate
  );
  const [endDate, setEndDate] = useState<string>(
    dayAndDateOfTheWeekArray[dateArrayIndex].endDate
  );

  const open = Boolean(anchorEl);
  const openTwo = Boolean(anchorElTwo);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    index === 0
      ? setAnchorEl(event.currentTarget)
      : setAnchorElTwo(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElTwo(null);
  };

  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    searchInputLocation
  )}/${startDate}/${endDate}?unitGroup=metric&key=DM9V8QUU64BXCW2DH6JEAH4XD&contentType=json`;

  const handleWeatherSearch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);

      const data = await response.json();

      setWeatherData(data);
      setWeatherBackgroundColors(data.days[0].icon);
    } catch (error) {
      console.log("Error getting data", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChevonClick = (motionDirection: string) => {
    if (motionDirection === "right" && dateArrayIndex === 6) return;
    if (motionDirection === "left" && dateArrayIndex === 0) return;

    if (motionDirection === "left") {
      setSelectedDay(dayAndDateOfTheWeekArray[dateArrayIndex - 1].day);
      setStartDate(dayAndDateOfTheWeekArray[dateArrayIndex - 1].startDate);
      setEndDate(dayAndDateOfTheWeekArray[dateArrayIndex - 1].endDate);
      setDateArrayIndex(dateArrayIndex - 1);
    } else if (motionDirection === "right") {
      setSelectedDay(dayAndDateOfTheWeekArray[dateArrayIndex + 1].day);
      setStartDate(dayAndDateOfTheWeekArray[dateArrayIndex + 1].startDate);
      setEndDate(dayAndDateOfTheWeekArray[dateArrayIndex + 1].endDate);
      setDateArrayIndex(dateArrayIndex + 1);
    }
  };

  useEffect(() => {
    handleWeatherSearch();
  }, [startDate, endDate]);

  return (
    <div className="w-full flex flex-col  max-w-7xl mx-auto mt-10 ">
      <div className="flex flex-row justify-between w-full ">
        <div className="relative">
          <div className="flex flex-row">
            <input
              type="text"
              className="bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-50 rounded-md w-96 h-12 px-10 py-2 border-opacity-40 hover:bg-opacity-5 transition"
              placeholder="Search"
              value={searchInputLocation}
              onChange={(e) => setSearchInputLocation(e.target.value)}
            />
            <Search className="absolute top-0 left-0 mt-[0.85rem] ml-3 text-white" />
            <Button
              className="absolute top-[0.35rem] right-2  ml-3 text-white"
              onClick={handleWeatherSearch}
            >
              <Send fontSize={"medium"} />
            </Button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-white bg-opacity-10 rounded-md hover:bg-opacity-5 transition mr-5">
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
                    handleClose();
                    setDateArrayIndex(index);
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

      <div className="h-1 w-full bg-white bg-opacity-10 rounded-xl mt-5" />

      <div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <LinearProgress />
          </div>
        ) : (
          <>
            {!weatherData ? (
              <div className="flex justify-center mt-56">
                <h1>No weather data found for the location you entered.</h1>
              </div>
            ) : (
              <div className="mt-10">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-center mt-5 items-center">
                  <div
                    className={dateArrayIndex === 0 ? "invisible" : "visible"}
                  >
                    <div
                      className="bg-white rounded-full bg-opacity-10 flex justify-center items-center hover:bg-opacity-5 transition"
                      onClick={() => handleChevonClick("left")}
                    >
                      <ArrowBackIos
                        sx={{ fontSize: 40 }}
                        className="m-2 pl-2"
                      />
                    </div>
                  </div>
                  <div>
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

                  <div className="lg:mt-0 mt-10">
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
                  <div
                    className={dateArrayIndex === 6 ? "invisible" : "visible"}
                  >
                    <div
                      className="bg-white rounded-full bg-opacity-10 p-2 flex justify-center items-center hover:bg-opacity-5 transition"
                      onClick={() => handleChevonClick("right")}
                    >
                      <ArrowForwardIos sx={{ fontSize: 34 }} />
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
