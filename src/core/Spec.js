import * as Descriptor from './Descriptor'
import * as Exporter from './Exporter'
import SpecWrapper from './SpecWrapper'

export default (state = {}) => {
  return SpecWrapper(state, {
    ...Descriptor,
    ...Exporter
  })
}
