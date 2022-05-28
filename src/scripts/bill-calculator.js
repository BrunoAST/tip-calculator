const BillCalculator = {
  _fields: {
    bill: "",
    numberOfPeople: "",
    tipPercentage: "",
  },

  setValueToField(fieldName, value) {
    this._fields[fieldName] = value;
    this.notifyOnFieldChanges(this._fields);
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

  notifyOnFieldChanges(fields) { },

  registerFieldsListener(listenerCallback) {
    this.notifyOnFieldChanges = listenerCallback;
  },

  getFieldByName(fieldName) {
    return this._fields[fieldName];
  },

  calculateBill() {
    return (this.bill / this.numberOfPeople).toFixed(2);
  },

  isValid() {
    throw new Error("Method not implemented.");
  }
};

// BillCalculator.registerFieldsListener(fields => console.log("Fields: ", fields));
