const numericalKeys = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'
];

const getMaxLength = (event) => {
  return event.target.attributes.maxLength?.value;
};

const validateMaxLength = (event, fieldName) => {
  if (numericalKeys.includes(event.key) && BillCalculator.getFieldByName(fieldName).length >= getMaxLength(event)) {
    event.preventDefault();
  }
};

const validateDecimalPlace = (event, fieldName) => {
  const decimalPlaces = BillCalculator.getFieldByName(fieldName).split(".")[1];
  if (numericalKeys.includes(event.key) && decimalPlaces?.length >= 2) {
    event.preventDefault();
  }
};
