import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

import { NFT_STORAGE_KEY } from './constants'

// // The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// // The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => {
    const { ethereum } = window
    if (!ethereum) {
      alert("Please Install Metamask")
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }).then(function (accounts) {
        setCurrentAccount(accounts[0]);
        console.log("======= Wallet connected, got the address: ", currentAccount);
      });
    } catch (error) {
      console.log(error)
    }
  };

  const uploadTemplateHandler = async (event) => {
    const f = event.target.files[0];
    console.log("====== file is: ", f);

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    const resp = await nftstorage.store({ image: f, name: "image01", description: "My test description for image01" });
    console.log("======== resp01: ", resp);
  };

  const handleTemplateSubmission = () => {
    console.log("======= handle submission");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => connectWalletHandler()} >Connect Wallet</button>

        <div>
          <h3>Upload Sample Template </h3>
          <input type="file" name="file" onChange={uploadTemplateHandler} />
          <div>
            <button onClick={handleTemplateSubmission}>Submit</button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
