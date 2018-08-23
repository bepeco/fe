import createApp from './createApp'
import Spec from './core/Spec'

console.log(
  Spec()
    .on('click', () => {})
    .className('table table-border')
    .toJSON()
)

createApp()
