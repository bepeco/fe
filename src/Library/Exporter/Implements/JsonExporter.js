import { Exporter } from '../Exporter'

const exportProc = {}

exportProc.id = (data, result) => {
  result.id = data.id
}

@Exporter('toJSON')
class JsonExporter {
  onExport (target, descriptorData) {
    const result = {}
    for (const prop in target) {
      if (target.hasOwnProperty(prop) && typeof target[prop] !== 'function') {
        result[prop] = target[prop]
      }
    }

    descriptorData.forEach(({name, data}) => exportProc[name](data, result))

    return result
  }
}

export { JsonExporter }
