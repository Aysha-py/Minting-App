import React from 'react'
import { useEffect, useState } from "react";
import { ListNft } from "../components/ListNft";
import { CheckNft } from '../components/CheckNft';
import bunzz from "bunzz-sdk";
import { NavBar } from '../components/Navbar';


const DAPP_ID = process.env.REACT_APP_DAPP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;




const Content = () => {
	const [handler, setHandler] = useState();
	const [userAddress, setUserAddress] = useState("")
	
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
				<div className='content-container'>
				<section className="section">
		
					
						<div className="nftMinter">
						<ListNft bunzz={handler} userAddress={userAddress} />
					<CheckNft bunzz={handler} userAddress={userAddress}/>
						
						</div>
				
				</section>
				</div>
		)
}

export default Content;
