export const getTwoFixedNum = (value) => Number(value).toFixed(2);

export const getAmountMillion = (value) => {
  if (!value) return "";
  let amountToChange = value;
  if (typeof value === "string") {
    const array = value.split(",");
    const amountString = array.join("");
    amountToChange = amountString.replace("$", "");
  }
  return `$${getTwoFixedNum(Number(amountToChange) / 1000000)} M`;
};