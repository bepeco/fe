import {createTodoItems} from './CreateTodoItem'

let addBtn
let itemList

const createTodoList = (container, datas) => {
  const template = `<div className="todoListMain">
        <div className="header">
          <input id='addInput' placeholder="enter task">
          </input>
          <button id='addBtn'>add</button>
        </div>
        ${createTodoItems(datas)}
      </div>`

  container.innerHTML = template

  addBtn = document.getElementById('addBtn')
  addBtn.addEventListener('click', (e) => {
    addItem(container, datas)
  })

  itemList = document.getElementsByTagName('ul')[0]
  itemList.addEventListener('click', (e) => {
    deleteItem(e, container, datas)
  })
}

const addItem = (container, datas) => {
  const addContents = document.getElementById('addInput')
  if (addContents && addContents.value !== '') {
    datas.push({id: (datas.length), done: false, contents: addContents.value})
    createTodoList(container, datas)
    addContents.value = ''
  }
}

const deleteItem = (e, container, datas) => {
  datas[e.target.id].done = true
  createTodoList(container, datas)
}

export {createTodoList}
