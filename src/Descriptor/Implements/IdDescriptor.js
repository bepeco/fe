import { Descriptor } from '../Descriptor'

const dataMap = new WeakMap()
const DEFAULT_OBJ = {id: undefined}

@Descriptor('id')
class IdDescriptor {
  onInvoke (target, id) {
    const data = dataMap.get(target) || DEFAULT_OBJ
    data.id = id
    dataMap.set(target, data)
  }

  getData (target) {
    return dataMap.get(target) || DEFAULT_OBJ
  }
}

export { IdDescriptor }
