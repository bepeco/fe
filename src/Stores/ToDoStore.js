import { requestTodos } from '../Utils/Service'
import { invokeRender } from '../Utils/EventBinding'

const createTodo = ({ id = 0, done = false, contents = '' } = {}) => ({
  id,
  done,
  contents
})

class ToDoStore {
  list = [];
  idToIdxMap = new Map();

  load = async () => {
    const list = await requestTodos()
    list.forEach(this.add)
  };

  add = data => {
    const idx = this.list.length
    const todo = createTodo(data)

    if (this.idToIdxMap.has(todo.id)) {
      throw new Error('Duplicated todo ID')
    }

    this.list.push(todo)
    this.idToIdxMap.set(todo.id, idx)
    invokeRender()
  };

  remove = id => {
    if (!this.idToIdxMap.has(id)) {
      throw new Error('Not contained ID')
    }

    const idx = this.idToIdxMap.get(id)
    this.list.splice(idx, 1)
    this.idToIdxMap.delete(id)
    invokeRender()
  };

  toggleDone = id => {
    if (!this.idToIdxMap.has(id)) {
      throw new Error('Not contained ID')
    }
    invokeRender()
  };

  bind = elementFactory => () =>
    elementFactory(
      { list: this.list },
      {
        add: this.add,
        remove: this.remove,
        toggleDone: this.toggleDone
      }
    );
}

const createToDoStore = () => new ToDoStore()

export default createToDoStore
