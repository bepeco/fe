import Spec from './Spec'
import { div, p, text } from './Hypertext'

const spec = Spec()
  .on('click', () => {})
  .className('table table-border')
  .style({
    width: '50px'
  })
const child = [
  div(),
  p(),
  text('Hello world')
]
const tag = div().spec(spec).children(...child)
const data = tag.toJSON()

console.log(tag)
console.log(data)
