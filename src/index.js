import { initSystem, invokeRender, registerRender } from './Utils/EventBinding'
import createApp from './Components/App'
import createTodoStore from './Stores/ToDoStore'
import { App } from './Components/BaseComponent'

initSystem()

window.addEventListener('load', async () => {
  const todoStore = createTodoStore()
  await todoStore.load()

  registerRender(() => {
    document.body.innerHTML = createApp(todoStore)
  })

  invokeRender()
})

console.log(App)
