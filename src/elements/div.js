import {FunctionalElement} from '../base/FunctionalElement'
import {Spec} from '../base/Spec'

const div = () => {
  const element = new FunctionalElement('div')
  const spec = new Spec(element)
  return spec
}

export {div}
