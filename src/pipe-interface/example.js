import {spec, on, className} from './spec'
import {children, div, p, text} from './hypertext'
import {json} from './exporter'

const attr = spec(
  on('click', () => {}),
  className('table table-border')
)
const child = children(
  div(),
  p(),
  text('Hello world')
)
const tag = div(attr, child)
const data = json(tag)

console.log(tag)
console.log(data)
