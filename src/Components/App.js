import { requestTodos } from '../Utils/Service'
import createTodoList from './TodoList'

const createApp = async () => {
  const list = await requestTodos()

  return `
  <div>
      <p>Todo App</p>
      ${createTodoList(list)}
  </div>`
}

export default createApp
