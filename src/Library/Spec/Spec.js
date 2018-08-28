import { Descriptable } from '../Descriptor/index'
import { Exportable } from '../Exporter/index'

@Descriptable()
@Exportable()
class Spec {
}

const SpecFactory = () => new Spec()

export default SpecFactory
