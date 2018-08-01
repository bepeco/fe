export const print = () => console.log("This is print!!");

export const DecoTemp = cls => class NewClass extends cls {
  constructor(...rest) {
    super(...rest);
  }

  printName() {
    console.log("My name is mysticPrg");
  }
};