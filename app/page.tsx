"use client";

import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
import { useState } from "react";
import { useGetWeatherGradient } from "@/hooks/useGetWeatherGradient";

export default function Home() {
  const [weatherBackgroundColors, setWeatherBackgroundColors] =
    useState<string>("clear-day");

  const gradientStyle = weatherBackgroundColors
    ? useGetWeatherGradient(weatherBackgroundColors)
    : "clear-day";

  return (
    <main className={`${gradientStyle} min-h-screen mb-56`}>
      <Navbar />
      <Weather setWeatherBackgroundColors={setWeatherBackgroundColors} />
    </main>
  );
}
