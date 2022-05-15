const handleButtonPercentageClick = (event) => {
  removeActiveClassFromButton();
  setActiveButton(event.target);
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
