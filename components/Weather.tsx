"use client";

import React, { useState } from "react";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import { daysOfTheWeekArray } from "@/constants/Data";
import { ExpandMore, Search } from "@mui/icons-material";

const Weather = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDay, setSelectedDay] = useState<string>("Every Friday");
  const [searchInput, setSearchInput] = useState<string>("");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full h-full flex justify-center mt-20 max-w-7xl mx-auto">
      <div className="flex flex-row justify-between w-full">
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              className="bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-50 rounded-md w-96 h-10 px-10 py-2 border-opacity-40"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Search className="absolute top-0 left-0 mt-[0.6rem] ml-3 text-white" />
          </div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-md">
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
            {selectedDay}
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
    </div>
  );
};

export default Weather;
