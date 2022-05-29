const totalPerPersonElement = document.querySelector("[data-selector='total-per-person']");
const tipPerPersonElement = document.querySelector("[data-selector='tip-per-person']");

BillCalculator
  .registerFieldsListener(() => {
    const totalPerPerson = BillCalculator.calculateTotalBillPerPerson();
    const tipPerPerson = BillCalculator.calculateTotalTipPerPerson();
    setTotalPerPerson(totalPerPerson);
    setTipPerPerson(tipPerPerson);
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
