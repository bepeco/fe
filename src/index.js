import { print, DecoTemp } from "./module1";

@DecoTemp
class DecoTarget {
}

window.addEventListener("load", () => {
  document.body.innerHTML = "Hello, FE";

  print();
  console.log(print);

  const decorated = new DecoTarget();
  decorated.printName();
});
