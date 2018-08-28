import { Descriptable } from '../Descriptor'
import { Exportable } from '../Exporter'

@Descriptable
@Exportable
class Spec {
}

const SpecFactory = () => new Spec()

export default SpecFactory
