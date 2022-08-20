import MemStore from '/tests/database/orbit-db-test-utils/src/mem-store.js';
import config from '/tests/database/orbit-db-test-utils/src/config/index.js';
import connectPeers from '/tests/database/orbit-db-test-utils/src/connect-peers.js';
import getIpfsPeerId from '/tests/database/orbit-db-test-utils/src/get-ipfs-peer-id.js';
import startIpfs from '/tests/database/orbit-db-test-utils/src/start-ipfs.js';
import stopIpfs from '/tests/database/orbit-db-test-utils/src/stop-ipfs.js';
import testAPIs from '/tests/database/orbit-db-test-utils/src/test-apis.js';
import waitForPeers from '/tests/database/orbit-db-test-utils/src/wait-for-peers.js';

export {
  MemStore,
  config,
  connectPeers,
  getIpfsPeerId,
  startIpfs,
  stopIpfs,
  testAPIs,
  waitForPeers
};

export default {
  MemStore: MemStore,
  config: config,
  connectPeers: connectPeers,
  getIpfsPeerId: getIpfsPeerId,
  startIpfs: startIpfs,
  stopIpfs: stopIpfs,
  testAPIs: testAPIs,
  waitForPeers: waitForPeers
}
