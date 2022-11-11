import "../src/Styles/App.css";
import { useEffect, useState } from "react";
import { ListNft } from "./components/ListNft";
import { RetrieveNft } from "./components/RetrieveNft";
import { NavBar } from "./components/navbar";
import {Tasks} from "./components/tasks"
import bunzz from "bunzz-sdk";

const DAPP_ID = process.env.REACT_APP_DAPP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [handler, setHandler] = useState();
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    const handler = await bunzz.initializeHandler({
      dappId: DAPP_ID,
      apiKey: API_KEY,
    });

    const userAddress = await handler.getSignerAddress();

    console.log(userAddress);
    setUserAddress(userAddress);
    setHandler(handler);
  };

  return (
    <div className="section_container">
        <Tasks />
      <section className="section">
        <h1>Mint Your NFT</h1>
        <NavBar />

        <div className="nftMinter">
          <ListNft bunzz={handler} userAddress={userAddress} />
        </div>
        <div className="nftChecker">
          <RetrieveNft bunzz={handler} userAdress={userAddress} />
        </div>
      </section>
    </div>
  );
};

export default App;
