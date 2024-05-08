import { daysOfTheWeekArray } from "@/constants/Data";

const generateDayAndDateOfTheWeekArray = () => {
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const dayAndDateOfTheWeekArray = [];

  for (let i = 0; i < 7; i++) {
    const dayIndex = (currentDayIndex + i) % 7;
    const startDate = new Date(currentDate);
    const endDate = new Date(currentDate);

    startDate.setDate(startDate.getDate() + i);
    endDate.setDate(endDate.getDate() + i + 7);

    const startDateString = startDate.toISOString().split("T")[0];
    const endDateString = endDate.toISOString().split("T")[0];

    dayAndDateOfTheWeekArray.push({
      day: daysOfTheWeekArray[dayIndex],
      startDate: startDateString,
      endDate: endDateString,
    });
  }

  return dayAndDateOfTheWeekArray;
};

export const dayAndDateOfTheWeekArray = generateDayAndDateOfTheWeekArray();
