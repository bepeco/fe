import { Descriptor } from '../Descriptor'

@Descriptor('id')
class IdDescriptor {
  onApply (target, data, id) {
    data.id = id
  }

  getData (target, data) {
    return data
  }
}

export { IdDescriptor }
