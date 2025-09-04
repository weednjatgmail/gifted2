
import { Identity } from './Auth/Identity.js'
import { gift } from './models/Gift.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /** @type {Identity} */

  identity = null

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  /**@type {gift[]} */

  gifts = []

}

export const AppState = createObservableProxy(new ObservableAppState())