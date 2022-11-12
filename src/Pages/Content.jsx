import React from 'react'
import { useEffect, useState } from "react";
import { ListNft } from "../components/ListNft";
import bunzz from "bunzz-sdk";
import { NavBar } from '../components/navbar';


const DAPP_ID = process.env.REACT_APP_DAPP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;


const Content = () => {
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
	  const [handler, setHandler] = useState();
  const [userAddress, setUserAddress] = useState("");
		return (
				<div>
				<section className="section">
					<NavBar />
						
						<h1>Mint Your NFT</h1>
					
						<div className="nftMinter">
								<ListNft bunzz={handler} userAddress={userAddress} />
						</div>
				
				</section>
				</div>
		)
}

export default Content