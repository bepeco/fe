import { Spec, Div } from '../index'

const {stringify} = JSON

window.addEventListener('load', () => {
  const spec = Spec().id('spec-id')
  const div = Div().id('div-id')

  console.log(spec, spec.toJSON())
  console.log(div, div.toJSON())

  document.body.innerHTML = `
    <p>Spec().id('spec-id').toJSON() => ${stringify(spec.toJSON())}</p>
    <p>Div().id('div-id').toJSON() => ${stringify(div.toJSON())}</p>
  `
})
