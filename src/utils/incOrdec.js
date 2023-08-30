export const numericConverter = (number) => {
  const numericString = number.replace(/[^0-9.-]+/g, "");
  return parseFloat(numericString);
};

export const percetageToValue = (percentageString) => {
  const valueString = percentageString.slice(0, -1);
  const numberValue = parseFloat(valueString);
  return numberValue;
};
