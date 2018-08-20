export const createTodoItem = ({id, done, contents}) => `
  <li>
    <span>id: ${id}</span>
    <span>done: ${done}</span>
    <span>contents: ${contents}</span>
  </li>
`;