export const getHumanDate = (unixDate) => {
  const convertedDate = new Date(unixDate);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return convertedDate.toLocaleDateString("en-US", options);
};
