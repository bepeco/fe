import { getExpoterNames, applyExporter } from './Exporter'
import defineInterface from '../System/DefineInterface'

const Exportable = defineInterface((target, allowExporterList) => {
  for (const exporterName of getExpoterNames()) {
    // TODO: 함수를 매번 만드므로 메모리 소모가 심함. 공용함수를 쓸 수 있도록 변경 필요
    const applyExporterWrapper = (...args) => applyExporter(target, exporterName, ...args)

    const notAllowedExporterWrapper = () => {
      console.warn(`${exporterName} is not allowed exporter for target:`, target)
      return ''
    }

    if (target.hasOwnProperty(exporterName)) {
      throw new Error(`Target object already has property: ${exporterName}`)
    }

    if (allowExporterList.length === 0 || allowExporterList.includes(exporterName)) {
      target[exporterName] = applyExporterWrapper
    } else {
      target[exporterName] = notAllowedExporterWrapper
    }
  }
  return target
})

export default Exportable
