import { WalletConnect } from '@web3-onboard/walletconnect';

// Initialize Web3 Onboard
const connect = WalletConnect({
  chains: [
    { id: 1, name: 'Ethereum', rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY' },
    { id: 56, name: 'BNB', rpcUrl: 'https://bsc-dataseed.binance.org/' },
    { id: 42220, name: 'Celo', rpcUrl: 'https://forno.celo.org/' },
    { id: 137, name: 'Polygon', rpcUrl: 'https://rpc-mainnet.maticvigil.com/' },
    { id: 42161, name: 'Arbitrum', rpcUrl: 'https://arb1.arbitrum.io/rpc' },
    { id: 10, name: 'Optimism', rpcUrl: 'https://mainnet.optimism.io/' },
    { id: 43114, name: 'Avalanche', rpcUrl: 'https://api.avax.network/ext/bc/C/rpc' },
    { id: 250, name: 'Fantom', rpcUrl: 'https://rpcapi.fantom.network/' },
    { id: 1666600000, name: 'Harmony', rpcUrl: 'https://api.harmony.one/' },
    { id: 1284, name: 'Moonbeam', rpcUrl: 'https://rpc.api.moonbeam.network' },
    { id: 100, name: 'Gnosis', rpcUrl: 'https://rpc.gnosischain.com/' },
    { id: 1313161554, name: 'Aurora', rpcUrl: 'https://mainnet.aurora.dev' },
    { id: 1088, name: 'Metis', rpcUrl: 'https://andromeda.metis.io/?owner=1088' },
    { id: 534351, name: 'Scroll', rpcUrl: 'https://evm.scroll.io/l2' },
    { id: 59140, name: 'Linea', rpcUrl: 'https://linea.binance.org/' },
    { id: 5001, name: 'Mantle', rpcUrl: 'https://rpc.mantlenetwork.xyz' },
    { id: 324, name: 'zkSync', rpcUrl: 'https://zksync2-mainnet.zksync.dev' }
  ],
  wallets: ['metamask', 'walletconnect', 'coinbase', 'fortmatic', 'portis', 'injected', 'trustwallet', 'tokenpocket']
});

const WalletConnectComponent = () => {
  const connectWallet = async () => {
    const connected = await connect.connect();
    console.log('Connected', connected);
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnectComponent;