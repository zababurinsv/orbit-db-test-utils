'use strict'

import * as Ctl from '/service/ReactNode/controlCenter/database/modules/ipfsd-ctl/dist/index.js'
import testAPIs from '/tests/database/orbit-db-test-utils/src/test-apis.js'

/**
 * Start an IPFS instance
 * @param  {Object}  config  [IPFS configuration to use]
 * @return {[Promise<IPFS>]} [IPFS instance]
 */
const startIpfs = async (type, config = {}) => {
  if (!testAPIs[type]) {
    throw new Error(`Wanted API type ${JSON.stringify(type)} is unknown. Available types: ${Object.keys(testAPIs).join(', ')}`)
  }

  const controllerConfig = testAPIs[type]
  controllerConfig.ipfsOptions = config

  // Spawn an IPFS daemon (type defined in)
  try {
    const ipfsd = Ctl.createController(controllerConfig)
    return ipfsd
  } catch (err) {
    throw new Error(err)
  }
}

export default startIpfs
