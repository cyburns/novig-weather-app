export const useGetWeatherGradient = (weatherCondition: string): string => {
  if (weatherCondition === "clear-day") {
    return "bg-gradient-to-b from-[#285d98] via-[#5fa1e3] to-[#e1d4c6]";
  } else if (weatherCondition === "clear-night") {
    return "bg-gradient-to-b from-[#04091c] via-[#21243d] to-[#384667]";
  } else if (weatherCondition === "cloudy") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "fog") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "hail") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "partly-cloudy-day") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5] to-[#5fa1e3]";
  } else if (weatherCondition === "partly-cloudy-night") {
    return "bg-gradient-to-b from-[#7b8ea3] to-[#21243d]   via-[#384667]";
  } else if (weatherCondition === "rain-snow-showers-day") {
    return "bg-gradient-to-b from-[#B0C4DE] to-[#FFFFFF] via-[#B0C4DE]";
  } else if (weatherCondition === "rain-snow-showers-night") {
    return "bg-gradient-to-b from-[#8194a5] via-[#2b3947] to-[#2b3947]";
  } else if (weatherCondition === "rain-snow") {
    return "bg-gradient-to-b from-[#B0C4DE] via-[#B0C4DE] to-[#FFFFFF]";
  } else if (weatherCondition === "rain") {
    return "bg-gradient-to-b from-[#8194a5] via-[#4c5d6c] to-[#2b3947]";
  } else if (weatherCondition === "showers-day") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#4682B4] to-[#F0F8FF]";
  } else if (weatherCondition === "showers-night") {
    return "bg-gradient-to-b from-[#191970] via-[#4682B4] to-[#00008B]";
  } else if (weatherCondition === "sleet") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "snow-showers-day") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "snow-showers-night") {
    return "bg-gradient-to-b from-[#8194a5] via-[#2b3947] to-[#2b3947]";
  } else if (weatherCondition === "snow") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "thunder-rain") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "thunder-showers-day") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "thunder-showers-night") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "thunder") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else if (weatherCondition === "wind") {
    return "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]";
  } else {
    return "bg-gradient-to-b from-[#FFFFFF] via-[#D3D3D3] to-[#708090]";
  }
};
