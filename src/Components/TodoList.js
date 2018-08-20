import createTodoItem from './TodoItem'

const createTodoList = list => `
  <div>Todo List</div>
  <div>
      <ol>${list.map(createTodoItem).join('')}</ol>
  </div>
`

export default createTodoList
