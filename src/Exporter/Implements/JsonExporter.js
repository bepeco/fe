import { Exporter } from '../Exporter'

@Exporter('toJSON')
class JsonExporter {
  onExport (target, descriptorData) {
    const result = {}
    for (const prop in target) {
      if (target.hasOwnProperty(prop) && typeof target[prop] !== 'function') {
        result[prop] = target[prop]
      }
    }

    for (const {name, data} of descriptorData) {
      switch (name) {
        case 'id':
          result.id = data.id
          break
      }
    }

    return {
      ...result
    }
  }
}

export { JsonExporter }
