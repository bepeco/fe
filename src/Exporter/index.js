import RegistrationFactory from '../System/RegistrationFactory'

const exporterValidator = (name, TargetClass) => {
  if (!TargetClass.prototype.hasOwnProperty('onExport')) {
    throw new Error(`${name} exporter should define "onExport" method.`)
  }
}

const {Decorator} = RegistrationFactory('Exporter', exporterValidator)

// const invokeDescriptor = (target, name, ...args) => getRegistrationData(name).onInvoke(target, ...args)
// const getData = name => getRegistrationData(name).getData()

export {
  Decorator as Exporter
}
