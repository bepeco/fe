import './css/common.css'
import { createTodoList } from './CreateTodoList'
import { items } from './Items'

window.addEventListener('load', () => {
  let container = document.querySelector('#container')
  createTodoList(container, items)
})
