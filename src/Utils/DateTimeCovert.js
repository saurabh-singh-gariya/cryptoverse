export const getHumanDate = (unixDate) => {
  const convertedDate = new Date(unixDate);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return convertedDate.toLocaleDateString("en-US", options);
};

export const getHumanTime = (unixDate) => {
  const convertedDate = new Date(unixDate);
  let hours = convertedDate?.getHours();
  let mins = convertedDate?.getMinutes();
  return `${hours > 12 ? hours - 12 : hours}:${mins} ${
    hours > 12 ? "PM" : "AM"
  }`;
};
