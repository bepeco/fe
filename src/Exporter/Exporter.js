import RegistrationFactory from '../System/RegistrationFactory'
import { getDescriptorData } from '../Descriptor'

const exporterValidator = (name, TargetClass) => {
  if (!TargetClass.prototype.hasOwnProperty('onExport')) {
    throw new Error(`${name} Exporter must have "onExport" method.`)
  }
}

const {
  Decorator: Exporter,
  getRegistrationNames: getExpoterNames,
  getInstance
} = RegistrationFactory('Exporter', exporterValidator)

const applyExporter = (target, exporterName, ...args) => {
  const exporter = getInstance(exporterName)
  return exporter.onExport(target, getDescriptorData(target), ...args)
}

export {
  Exporter,
  getExpoterNames,
  applyExporter
}
