export const useGetWeatherGradient = (weatherCondition: string): string => {
  const weatherGradients: { [key: string]: string } = {
    "clear-day": "bg-gradient-to-b from-[#285d98] via-[#5fa1e3] to-[#e1d4c6]",
    "clear-night": "bg-gradient-to-b from-[#04091c] via-[#21243d] to-[#384667]",
    cloudy: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    fog: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    hail: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    "partly-cloudy-day":
      "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5] to-[#5fa1e3]",
    "partly-cloudy-night":
      "bg-gradient-to-b from-[#7b8ea3] to-[#21243d]   via-[#384667]",
    "rain-snow-showers-day":
      "bg-gradient-to-b from-[#B0C4DE] to-[#FFFFFF] via-[#B0C4DE]",
    "rain-snow-showers-night":
      "bg-gradient-to-b from-[#8194a5] via-[#2b3947] to-[#2b3947]",
    "rain-snow": "bg-gradient-to-b from-[#B0C4DE] via-[#B0C4DE] to-[#FFFFFF]",
    rain: "bg-gradient-to-b from-[#8194a5] via-[#4c5d6c] to-[#2b3947]",
    "showers-day": "bg-gradient-to-b from-[#7b8ea3] via-[#4682B4] to-[#F0F8FF]",
    "showers-night":
      "bg-gradient-to-b from-[#191970] via-[#4682B4] to-[#00008B]",
    sleet: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    "snow-showers-day":
      "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    "snow-showers-night":
      "bg-gradient-to-b from-[#8194a5] via-[#2b3947] to-[#2b3947]",
    snow: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    "thunder-rain":
      "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    "thunder-showers-day":
      "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    "thunder-showers-night":
      "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    thunder: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    wind: "bg-gradient-to-b from-[#7b8ea3] via-[#8594a5]  to-[#c0cfdb]",
    default: "bg-gradient-to-b from-[#FFFFFF] via-[#D3D3D3] to-[#708090]",
  };

  return weatherGradients[weatherCondition] || weatherGradients["default"];
};
