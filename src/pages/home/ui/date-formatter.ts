export const dateFormatter = (date: string) => {
  const regex = /(\d{1,2})월\s+(\d{1,2})일\s+(\S+)\s+(\d{1,2}:\d{2})/;
  const match = date.match(regex);

  if (!match) {
    throw new Error('Invalid date format');
  }

  const [, month, day, weekday, time] = match;

  return {
    month: parseInt(month, 10),
    day: parseInt(day, 10),
    weekday,
    time,
  };
};
