import React from "react";
import Image from "next/image";

interface WeatherIconProps {
  icon: string;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
  return (
    <div>
      <Image
        width={150}
        height={150}
        src={`/assets/${icon}.svg`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherIcon;
