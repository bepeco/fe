import {FunctionalElement} from '../base/FunctionalElement'
import {Spec} from '../base/Spec'

const p = () => {
  const element = new FunctionalElement('p')
  const spec = new Spec(element)
  return spec
}

export {p}
