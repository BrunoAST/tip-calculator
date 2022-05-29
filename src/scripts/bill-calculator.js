const BillCalculator = {
  _fields: {
    bill: "",
    numberOfPeople: "",
    tipPercentage: "",
  },

  setValueToField(fieldName, value) {
    this._fields[fieldName] = value;
    this.notifyOnFieldChanges();
  },

  get bill() {
    return Number(this._fields.bill);
  },

  get numberOfPeople() {
    return Number(this._fields.numberOfPeople);
  },

  get tipPercentage() {
    return Number(this._fields.tipPercentage);
  },

  notifyOnFieldChanges() { },

  registerFieldsListener(listenerCallback) {
    this.notifyOnFieldChanges = listenerCallback;
  },

  getFieldByName(fieldName) {
    return this._fields[fieldName];
  },

  calculateTotalBillPerPerson() {
    if (!this._isValid()) {
      return;
    }

    return ((this.bill + this._calculatePercentageTip()) / this.numberOfPeople).toFixed(2);
  },

  calculateTotalTipPerPerson() {
    if (!this._isValid()) {
      return;
    }

    return (this._calculatePercentageTip() / this.numberOfPeople).toFixed(2);
  },

  hasValues() {
    return this.bill || this.numberOfPeople || this.tipPercentage;
  },

  _calculatePercentageTip() {
    return this.bill * (this.tipPercentage / 100);
  },

  _isValid() {
    return this.bill && this.numberOfPeople && this.tipPercentage;
  }
};
