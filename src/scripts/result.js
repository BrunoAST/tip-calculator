const totalPerPersonElement = document.querySelector("[data-selector='total-per-person']");
const tipPerPersonElement = document.querySelector("[data-selector='tip-per-person']");
const reset = document.querySelector("[data-selector='reset']");

BillCalculator
  .registerFieldsListener(() => {
    const totalPerPerson = BillCalculator.calculateTotalBillPerPerson();
    const tipPerPerson = BillCalculator.calculateTotalTipPerPerson();
    setTotalPerPerson(totalPerPerson);
    setTipPerPerson(tipPerPerson);
    setDisabledState();
  });

const setTotalPerPerson = (totalPerPerson) => {
  if (totalPerPerson) {
    totalPerPersonElement.innerHTML = `$${totalPerPerson}`;
  }
};

const setTipPerPerson = (tipPerPerson) => {
  if (tipPerPerson) {
    tipPerPersonElement.innerHTML = `$${tipPerPerson}`;
  }
};

const handleResetClick = () => {
  location.reload();
};

const setDisabledState = () => {
  if (BillCalculator.hasValues()) {
    reset.removeAttribute("disabled");
  } else {
    reset.setAttribute("disabled", "");
  }
};
