import { Spec, Div } from '../index'

const spec = Spec().id('spec-id')
const div = Div().id('div-id')

console.log(spec, spec.toJSON())
console.log(div, div.toJSON())
