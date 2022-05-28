const validationOptions = [
  {
    key: "maxLength",
    validation: validateMaxLength
  },
  {
    key: "decimalPlace",
    validation: validateDecimalPlace
  }
];

const handleValidations = (event, fieldName, validations) => {
  validations.forEach(validationName => {
    const option = validationOptions.find(option => option.key === validationName);
    option.validation(event, fieldName);
  });
};

const setValue = (event, fieldName) => {
  BillCalculator.setValueToField(fieldName, event.target.value);
};
