import createApp from './Components/App'

window.addEventListener('load', async () => {
  const app = await createApp()
  document.body.innerHTML = app
})
