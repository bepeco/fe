import { Descriptable } from '../Descriptor'
// import { Exportable, } from '../Exporter'

@Descriptable
class Spec {
}

const SpecFactory = () => new Spec()

export default SpecFactory
