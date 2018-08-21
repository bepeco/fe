import {parseHTML} from './helper'

export const createTodoItem = ({store}) => {
  let dom = null
  const template = () => {
    const todo = store.get('todo')
    const items = todo.reduce((result, {id, contents}) => {
      return `${result}<li data-id="${id}">${contents}</li>`
    }, '')
    let list

    if (items) {
      list = `<ul>${items}</ul>`
    } else {
      list = 'No Items'
    }
    return `<div>${list}</div>`
  }
  const mount = () => {
    dom = parseHTML(template())
    store.subscribe('todo', () => {
      render()
    })
    return dom
  }
  const render = () => {
    const newDom = parseHTML(template())
    dom.replaceWith(newDom)
    dom = newDom
  }

  return mount()
}
