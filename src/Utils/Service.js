const fakeData = [
  { id: 0, done: false, contents: "Todo 1" },
  { id: 1, done: true, contents: "Todo 2" },
  { id: 2, done: false, contents: "Todo 3" }
];

export const requestTodos = async () => {
  return [ ...fakeData ];
};