import { Descriptable, makeDescriptable } from '../Descriptor'

class Spec extends Descriptable {}

const SpecFactory = (...args) => makeDescriptable(new Spec(...args))

export default SpecFactory
