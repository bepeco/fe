import {parseHTML, bindEvent} from './helper'

export const createTodoItem = ({store}) => {
  // User
  const template = () => {
    const todo = store.get('todo')
    const items = todo.reduce((result, {id, contents}) => {
      return `${result}<li data-id="${id}">
        ${contents} <button type="button">X</button>
      </li>`
    }, '')
    let list

    if (items) {
      list = `<ul>${items}</ul>`
    } else {
      list = 'No Items'
    }
    return `<div>${list}</div>`
  }
  const methods = {
    removeItem () {
      const id = this.parentNode.getAttribute('data-id')
      const todo = store.get('todo')
        .filter((item) => item.id.toString() !== id)
      store.set('todo', todo)
    }
  }
  // Framework
  const mount = () => {
    let dom = null
    const createNewDom = () => {
      const dom = parseHTML(template())
      bindEvent(events, methods, dom)
      return dom
    }
    const render = () => {
      const newDom = createNewDom()
      dom.replaceWith(newDom)
      dom = newDom
    }

    dom = createNewDom()
    store.subscribe('todo', () => {
      render()
    })
    return dom
  }
  // Directive
  const events = [
    ['li > button', 'onclick', 'removeItem']
  ]

  return mount()
}
