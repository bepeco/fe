const createTodoItems = (datas) => {
  const template = `<ul className='theList'>
          ${createTasks(datas)}
        </ul>`
  return template
}

const createTasks = (datas) => {
  let template = ''
  datas.forEach((v) => {
    if (v.done === false) {
      let task = `<li id=${v.id}>${v.contents}</li>`
      template += task
    }
  })
  return template
}

export {createTodoItems}
