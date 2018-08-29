import Exportable from '../Exporter/Exportable'
import Descriptable from '../Descriptor/Descriptable'
import { BaseElement } from './Element'

@Descriptable('id', 'on', 'className')
@Exportable('toJSON', 'toDOM', 'toString')
class ElementP extends BaseElement {
  constructor () {
    super('P', 'p')
  }
}

export const P = () => new ElementP()
