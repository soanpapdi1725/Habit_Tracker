import dayjs from "dayjs";

/**
 * Calculate the current streak for a habit.
 * Counts consecutive completed days going backwards from today.
 * If today is not done, streak is 0.
 */
export function getStreak(completedDates) {
  let streak = 0;
  let day = dayjs();

  // Walk backwards from today — stop at the first missing day
  while (completedDates.includes(day.format("YYYY-MM-DD"))) {
    streak++;
    day = day.subtract(1, "day");
  }

  return streak;
}

/**
 * Get the last 7 days as an array of objects.
 *
 * @param {string} [today] - Override for today's date
 * @returns {{ date: string, label: string, dayOfWeek: string, isToday: boolean }[]}
 */
export function getLast7Days(today) {
  const todayDate = today ? dayjs(today) : dayjs();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const day = todayDate.subtract(i, "day");
    days.push({
      date: day.format("YYYY-MM-DD"),
      label: day.format("DD"),
      dayOfWeek: day.format("ddd"),
      isToday: i === 0,
    });
  }

  return days;
}
