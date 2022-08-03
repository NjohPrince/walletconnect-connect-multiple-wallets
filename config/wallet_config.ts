import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

export const providerOptions = {
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
      appName: "UnicornEthNetwork",
      infuraId: "74ea3e73497e40838cdd414da3c5133d",
      rpc: "",
      chainId: 4,
      appLogoUrl: null,
      darkMode: true,
    },
  },
};
