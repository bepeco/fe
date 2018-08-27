import Descriptable from './Descriptable'

class Descriptor {
  setData (target, data) {}

  getData (target) {}

  register () {}

  get () {}
}

const descriptorMap = new Map()

const makeDescriptable = target => {
  for (const name of descriptorMap.keys()) {
    // 중복체크는 등록할 때만
    target[name] = (...args) => {
      descriptorMap.get(name).register(target, ...args)
      return target
    }
  }

  return target
}

const instanceForDuplicatedDescriptorCheck = new Descriptable()
const isDuplicatedName = name => {
  if (Descriptable.prototype[name] !== undefined) {
    console.warn(`"${name}" is already exist in Descriptable class`)
    return true
  }

  if (instanceForDuplicatedDescriptorCheck[name] !== undefined) {
    console.warn(`"${name}" is already exist in spec instance`)
    return true
  }

  if (descriptorMap.has(name)) {
    console.warn(`"${name}" is already registered descriptor`)
    return true
  }

  return false
}

const isDescriptor = (name, Class) => {
  if (Class.prototype instanceof Descriptor === false) {
    throw new Error(`${name} is not subclass of Descriptor.`)
  }

  if (!Class.prototype.hasOwnProperty('register')) {
    throw new Error(`${name} descriptor should define "register" method.`)
  }

  if (!Class.prototype.hasOwnProperty('get')) {
    throw new Error(`${name} descriptor should define "get" method.`)
  }
}

const RegistrationDescriptor = name => DescriptorCls => {
  isDescriptor(name, DescriptorCls)

  if (!isDuplicatedName(name)) {
    descriptorMap.set(name, new DescriptorCls())
  }
  return DescriptorCls
}

export { Descriptor, descriptorMap, makeDescriptable, RegistrationDescriptor }
