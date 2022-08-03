import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

// stylesheet
import styles from "../styles/Home.module.css";

// wallet service
import { connectwallet } from "../services/WalletService";

const Home: NextPage = () => {
  const [account, setAccount] = useState();

  const triggerConnection = useCallback(async () => {
    await connectwallet()
      .then((response) => {
        console.log("CONNECTION_RESPONSE_DATA: ", response);
      })
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log("Please connect to MetaMask.");
        } else {
          console.error("ER: ", error);
        }
        console.log("ERROR_CONNECTING_TO_WALLET: ", error);
      });
  }, []);

  const disconnectWallet = useCallback(async () => {}, []);

  // useEffect(() => {
  //   triggerConnection();
  // }, [triggerConnection]);

  return (
    <div className={styles.container}>
      <Head>
        <title>WalletConnect - Web3Modal</title>
        <meta name="description" content="Wallet Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={triggerConnection}>Connect Wallet</button>
      <button onClick={disconnectWallet}>Disconnect Wallet</button>
    </div>
  );
};

export default Home;
