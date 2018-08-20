import createTodoItem from "TodoItem";

export const createTodoList = list => `
  <div>Todo List</div>
  <div>
      <ol>${list.map(createTodoItem)}</ol>
  </div>
`;
