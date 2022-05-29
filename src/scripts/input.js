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
  if (!event.target.validity.valid) {
    return;
  }
  BillCalculator.setValueToField(fieldName, event.target.value);
};

const resetValue = (element, fieldName) => {
  BillCalculator.setValueToField(fieldName, "");
  element.value = "";
};
