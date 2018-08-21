import { registerEventListener } from '../Utils/EventBinding'
import createTodoItem from './TodoItem'

let contents = ''

const createTodoList = ({ list } = {}, { add, remove, toggleDone } = {}) => {
  const handleAddClick = () => {
    if (!contents) {
      window.alert('내용을 입력해 주세요.')
      return
    }
    add({ id: list.length, done: false, contents })
    contents = ''
  }
  const handleContentsChange = ({ target: { value } }) => (contents = value)

  const todoItems = list
    .map(todo =>
      createTodoItem(todo, {
        remove: () => remove(todo.id),
        toggleDone: () => toggleDone(todo.id)
      })
    )
    .join('')

  return `
  <div>Todo List</div>
  <div>
      <ol>
        ${todoItems}
      </ol>
  </div>
  <div>
    <span><input type="text" ${registerEventListener({
    input: handleContentsChange
  })}/></span>
    <button ${registerEventListener({ click: handleAddClick })}>추가</button>
  </div>
`
}

export default createTodoList
