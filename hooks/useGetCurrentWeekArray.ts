const generateDayAndDateOfTheWeekArray = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const currentDateString = currentDate.toISOString().split("T")[0];
  const dayAndDateOfTheWeekArray = [];

  for (let i = 0; i < 7; i++) {
    const dayIndex = (currentDayIndex + i) % 7;
    const date = new Date(currentDate);

    date.setDate(date.getDate() + i);
    const dateString = date.toISOString().split("T")[0];

    dayAndDateOfTheWeekArray.push({
      day: daysOfWeek[dayIndex],
      date: dateString,
    });
  }

  return dayAndDateOfTheWeekArray;
};

export const dayAndDateOfTheWeekArray = generateDayAndDateOfTheWeekArray();
