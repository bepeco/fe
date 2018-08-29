import { Spec, Div, renderToDOM } from '../index'

window.addEventListener('load', () => {
  const parent = document.querySelector('body')

  const spec = Spec().id('spec-id')
  const div = Div().id('div-id')

  console.log(spec, spec.toJSON())
  console.log(div, div.toJSON())

  renderToDOM(parent, div)
})
