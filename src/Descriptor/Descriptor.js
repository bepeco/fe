import RegistrationFactory from '../System/RegistrationFactory'

const descriptorValidator = (name, TargetClass) => {
  if (!TargetClass.prototype.hasOwnProperty('onInvoke')) {
    throw new Error(`${name} descriptor should define "onInvoke" method.`)
  }

  if (!TargetClass.prototype.hasOwnProperty('getData')) {
    throw new Error(`${name} descriptor should define "getData" method.`)
  }
}

const {Decorator, getRegistrationNames, getRegistrationData} = RegistrationFactory('Descriptor', descriptorValidator)

const invokeDescriptor = (target, name, ...args) => getRegistrationData(name).onInvoke(target, ...args)
const getData = name => getRegistrationData(name).getData()

export {
  Decorator as Descriptor,
  getRegistrationNames as getDescriptorNames,

  invokeDescriptor,
  getData
}
