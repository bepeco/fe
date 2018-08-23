import * as Descriptor from './Descriptor'
import * as Exporter from './Exporter'
import OperatorWrapper from './OperatorWrapper'

export default (state = {}) => {
  return OperatorWrapper(state, {
    ...Descriptor,
    ...Exporter
  })
}
