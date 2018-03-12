import env from './env';

const networks = {
  mainnet: { // network name translation t('Mainnet');
    name: 'Mainnet',
    ssl: true,
    port: 443,
    code: 0,
  },
  testnet: { // network name translation t('Testnet');
    name: 'Testnet',
    testnet: true,
    ssl: true,
    port: 443,
    code: 1,
  },
  customNode: { // network name translation t('Custom Node');
    name: 'Custom Node',
    custom: true,
    address: 'http://localhost:4000',
    code: 2,
  },
};

let preferredNetwork = (window.localStorage && window.localStorage.getItem('defaultNetwork')) || env.defaultNetwork;
preferredNetwork = env.test ? env.testNetwork : preferredNetwork;
networks.default = networks[preferredNetwork];
export default networks;
