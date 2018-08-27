import Spec from './Spec'
import { div, p } from './Hypertext'

console.log(
  Spec()
    .on('click', () => {})
    .className('table table-border')
    .toJSON()
)

div()
p()
