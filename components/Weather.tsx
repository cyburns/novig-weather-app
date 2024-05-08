"use client";

import React, { use, useEffect, useState } from "react";
import { Button, Menu, MenuItem, LinearProgress } from "@mui/material";
import { daysOfTheWeekArray } from "@/constants/Data";
import {
  ExpandMore,
  Search,
  Send,
  WbSunny,
  Air,
  CloudQueue,
  WaterDropOutlined,
} from "@mui/icons-material";
import WeatherIcon from "./WeatherIcon";
import DayCard from "./DayCard";

const Weather = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDay, setSelectedDay] = useState<string>("Friday");
  const [searchInputLocation, setSearchInputLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const API_URL2 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york%20city?unitGroup=metric&key=DM9V8QUU64BXCW2DH6JEAH4XD&contentType=json`;

  const handleWeatherSearch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL2);
      const data = await response.json();

      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleWeatherSearch();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center mt-20 max-w-7xl mx-auto">
      <div className="flex flex-row justify-between w-full">
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
              className="absolute top-[0.35rem] right-0  ml-3 text-white"
              onClick={handleWeatherSearch}
            >
              <Send fontSize={"medium"} />
            </Button>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-md hover:bg-opacity-5 transition">
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="text-white hover:text-white/50 transition text-md pr-5 rounded-md"
            sx={{ textTransform: "capitalize" }}
          >
            <ExpandMore fontSize="large" />
            Every {selectedDay}
          </Button>
          <Menu
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
            {daysOfTheWeekArray.map((day, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  setSelectedDay(day);
                  handleClose();
                }}
              >
                {day}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <div className="h-1 w-full bg-white bg-opacity-10 rounded-xl mt-5" />

      <div className="mt-10">
        {!weatherData || isLoading ? (
          <div className="flex justify-center items-center">
            <LinearProgress />
          </div>
        ) : (
          <div>
            {/* <div className="flex flex-row justify-between">
              <h1 className="text-white text-2xl capitalize">
                {weatherData.address} this {selectedDay}
              </h1>
              <h1 className="text-white text-2xl">Next {selectedDay}</h1>
            </div> */}

            <div className="flex flex-row justify-between mt-5">
              {/* CURRENT DAY */}
              <DayCard
                weatherData={weatherData}
                selectedDay={selectedDay}
                dayIndex={0}
              />

              {/* 7 DAYS AHEAD */}
              <DayCard
                weatherData={weatherData}
                selectedDay={selectedDay}
                dayIndex={6}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
