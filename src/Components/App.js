import createTodoList from './TodoList'

const createApp = todoStore => {
  return `
  <div>
      <p>Todo App</p>
      ${todoStore.bind(createTodoList)()}
  </div>`
}

export default createApp
