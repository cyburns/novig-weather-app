import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Weather = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));

  return (
    <div className="w-full h-full flex justify-center mt-20">
      <div>
        <div>
          <input
            type="text"
            className="bg-blue-900 bg-opacity-40  placeholder-white placeholder-opacity-50 rounded-md w-96 h-10 px-4 py-2 border border-opacity-40"
            placeholder="Search"
          />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker", "TimePicker"]}>
            <TimePicker
              label="Uncontrolled picker"
              defaultValue={dayjs("2022-04-17T15:30")}
            />
            <TimePicker
              label="Controlled picker"
              value={value}
              onChange={(newValue: any) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Weather;
