import * as descriptor from './descriptor'
import * as exporter from './exporter'
import {immutable, lift, chainLift} from '../helper/index'

export default (state = {}) => {
  const immutableState = immutable(state)
  return {
    ...chainLift(immutableState, descriptor),
    ...lift(immutableState, exporter)
  }
}
