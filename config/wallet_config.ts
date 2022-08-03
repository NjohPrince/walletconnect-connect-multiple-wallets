import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "74ea3e73497e40838cdd414da3c5133d",
    },
  },
  walletlink: {
    package: WalletLink,
    options: {
      appName: "UnicornEthNetwork NFT Minter",
      infuraId: "74ea3e73497e40838cdd414da3c5133d",
      rpc: "",
      chainId: 4,
      appLogoUrl: null,
      darkMode: true,
    },
  },
};

const web3Modal = new Web3Modal({
  network: "rinkeby",
  theme: "dark",
  cacheProvider: true,
  providerOptions,
});
