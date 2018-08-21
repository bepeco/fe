import { registerEventListener } from '../Utils/EventBinding'

const createTodoItem = (
  { id, done, contents } = {},
  { toggleDone, remove } = {}
) => {
  const checked = done ? 'checked' : ''

  return `
  <li>
    <span><input type="checkbox" ${checked} /></span>
    <span>id: ${id}</span>
    <span>contents: ${contents}</span>
    <span><button ${registerEventListener({ click: remove })}>삭제</button></span>
  </li>
`
}

export default createTodoItem
