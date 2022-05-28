const handleButtonPercentageClick = (event) => {
  removeActiveClassFromButton();
  setActiveButton(event.target);
  setPercentageSelected(event);
};

const removeActiveClassFromButton = () => {
  const buttonActive = document.querySelector(".btn-percentage-active");
  if (!buttonActive) {
    return;
  }
  buttonActive.classList.remove("btn-percentage-active");
};

const setActiveButton = (buttonElement) => {
  buttonElement.classList.add("btn-percentage-active");
};

const setPercentageSelected = (event) => {
  const percentage = event.target.attributes["data-value"].value;
  BillCalculator.setValueToField("tipPercentage", percentage);
};
