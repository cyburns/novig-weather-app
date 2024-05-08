export const formatTime = (epoch: number) => {
  const date = new Date(epoch * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const celsiusToFahrenheit = (celsius: number) => {
  return Math.round((celsius * 9) / 5 + 32);
};

export const getOrdinal = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix = ["th", "st", "nd", "rd"];
  const relevantDigits = day < 30 ? day % 20 : day % 30;
  const suffixIndex = relevantDigits <= 3 ? relevantDigits : 0;

  return day + suffix[suffixIndex];
};

export const kmPerHourToMilesPerHour = (kmPerHour: number) => {
  return Math.round(kmPerHour * 0.621371);
};

export const filterTimeOfDay = (hours: any, timeOfDay: any) => {
  const filterHours = hours.filter((hour: any) => {
    const hourOfDay = parseInt(hour.datetime.split(":")[0]);

    if (timeOfDay === "Morning") {
      return hourOfDay >= 8 && hourOfDay < 12;
    } else if (timeOfDay === "Afternoon") {
      return hourOfDay >= 12 && hourOfDay < 17;
    } else if (timeOfDay === "Evening") {
      return (
        (hourOfDay >= 17 && hourOfDay <= 23) ||
        (hourOfDay >= 0 && hourOfDay < 5)
      );
    } else {
      return true;
    }
  });

  return filterHours;
};
