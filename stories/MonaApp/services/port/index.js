import { PoRT } from "@_koi/port";
const REACT_APP_NODE_URL = `https://mainnet.koii.live`

let port = new PoRT({
  trustedNodeAddress: REACT_APP_NODE_URL,
  node: 5
});

export default port;
