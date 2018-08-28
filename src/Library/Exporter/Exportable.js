import { applyExporter, getExpoterNames } from './Exporter'

const Exportable = targetClass => class extends targetClass {
  constructor (...args) {
    super(...args)

    makeExportable(this)
  }
}

const makeExportable = target => {
  for (const exporterName of getExpoterNames()) {
    if (target.hasOwnProperty(exporterName)) {
      throw new Error(`Target object already has property: ${exporterName}`)
    }

    target[exporterName] = (...args) => applyExporter(target, exporterName, ...args)
  }

  return target
}

export default Exportable
