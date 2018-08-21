import { initSystem, invokeRender, registerRender } from './Utils/EventBinding'
import createApp from './Components/App'
import createTodoStore from './Stores/ToDoStore'

initSystem()

window.addEventListener('load', async () => {
  const todoStore = createTodoStore()
  await todoStore.load()

  registerRender(() => {
    document.body.innerHTML = createApp(todoStore)
  })

  invokeRender()
})
