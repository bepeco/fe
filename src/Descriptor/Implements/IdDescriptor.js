import { Descriptor, RegistrationDescriptor } from '../Descriptor'

@RegistrationDescriptor('id')
class IdDescriptor extends Descriptor {
  register (target, id) {
    return this.setData({id})
  }

  get (target) {
    return this.getData(target)
  }
}

export { IdDescriptor }
