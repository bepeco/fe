import './css/common.css'

const datas = [
  { id: 0, done: false, contents: 'asdasdad' },
  { id: 1, done: false, contents: 'asdasdad' },
  { id: 2, done: false, contents: 'asdasdad' }
]

let container
let addBtn
let itemList

window.addEventListener('load', () => {
  container = document.querySelector('#container')

  createTodoList(container)
})

const createTodoList = (container) => {
  const template = `<div className="todoListMain">
        <div className="header">
          <input id='addInput' placeholder="enter task">
          </input>
          <button id='addBtn'>add</button>
        </div>
        ${createTodoItems()}
      </div>`

  container.innerHTML = template

  addBtn = document.getElementById('addBtn')
  addBtn.addEventListener('click', (e) => {
    addItem(e)
  })

  itemList = document.getElementsByTagName('ul')[0]
  itemList.addEventListener('click', (e) => {
    deleteItem(e)
  })
}

const addItem = () => {
  const addContents = document.getElementById('addInput')
  if (addContents && addContents.value !== '') {
    datas.push({id: (datas.length), done: false, contents: addContents.value})
    createTodoList(container)
    addContents.value = ''
  }
}

const createTodoItems = () => {
  const template = `<ul className='theList'>
          ${createTasks()}
      </ul>`

  return template
}

const createTasks = () => {
  let template = ''
  datas.forEach((v) => {
    if (v.done === false) {
      let task = `<li id=${v.id}>${v.contents}</li>`
      template += task
    }
  })

  return template
}

const deleteItem = (e) => {
  datas[e.target.id].done = true
  createTodoList(container)
}
