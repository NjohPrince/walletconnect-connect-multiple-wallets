import Web3 from "web3";
import Web3Modal from "web3modal";

// configuration
import { providerOptions } from "../config/wallet_config";

export const connectwallet = async () => {
  var provider: any;
  var account: any;

  if (typeof window !== "undefined") {
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      theme: "dark",
      cacheProvider: true,
      providerOptions,
    });

    provider = await web3Modal.connect();

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: string[]) => {
      console.log("ACCOUNT: ", accounts);
      if (accounts.length === 0) {
        web3Modal.cachedProvider;
        web3Modal.clearCachedProvider();
      }
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: number) => {
      console.log("CHAIN_ID", chainId);
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code: number, reason: string) => {
      console.log("DISCONNECTED: ", code, reason);
    });

    var web3 = new Web3(provider);
    //   await window.ethereum.send("eth_requestAccounts");

    await window.ethereum.request({ method: "eth_requestAccounts" });

    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
  }

  return { account, provider };
};
