export const convertMinutesToTotalDuration = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60); // Get total hours
  const minutes = totalMinutes % 60; // Get remaining minutes

  // Return the duration in "X hours Y minutes" format
  return `${hours} hours ${minutes} minutes`;
};
