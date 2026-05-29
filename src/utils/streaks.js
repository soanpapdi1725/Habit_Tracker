import dayjs from "dayjs";

/**
 * Calculate the current streak for a habit.
 *
 * Streak rule:
 * - If today is NOT in completedDates → streak is 0 (chain broken).
 * - Otherwise, count backwards from today through consecutive completed days.
 *
 * @param {string[]} completedDates - Array of "YYYY-MM-DD" strings
 * @param {string} [today] - Override for today's date (for testing)
 * @returns {number} Current streak count
 */
export function getStreak(
  completedDates,
  today = dayjs().format("YYYY-MM-DD"),
) {
  const todayStr = today;
  const dateSet = new Set(completedDates);
  console.log(dateSet.has(todayStr))
  if (!dateSet.has(todayStr)) {
    return 0;
  }

  let streak = 0;
  let current = dayjs(todayStr);

  while (dateSet.has(current.format("YYYY-MM-DD"))) {
    streak++;
    current = current.subtract(1, "day");
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
    const d = todayDate.subtract(i, "day");
    days.push({
      date: d.format("YYYY-MM-DD"),
      label: d.format("DD"),
      dayOfWeek: d.format("ddd"),
      isToday: i === 0,
    });
  }

  return days;
}
