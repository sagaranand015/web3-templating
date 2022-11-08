import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';

// Import the NFTStorage class and File constructor from the 'nft.storage' package
// import { NFTStorage } from 'nft.storage';

// The 'mime' npm package helps us set the correct file type on our File objects
// import mime from 'mime'

// import { NFT_STORAGE_KEY } from './constants';

// // The 'fs' builtin module on Node.js provides access to the file system
// import fs from 'fs'

// // The 'path' module provides helpers for manipulating filesystem paths
// import path from 'path'

function App() {
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWalletHandler = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Please Install Metamask');
        }
        try {
            const accounts = await ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(function (accounts) {
                    setCurrentAccount(accounts[0]);
                    console.log(
                        '======= Wallet connected, got the address: ',
                        currentAccount,
                    );
                });
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        // Handle form data or submission here
        console.log('form data: ', data);
    };

    // const uploadTemplateHandler = async (event) => {
    //     const f = event.target.files[0];
    //     console.log('====== file is: ', f);

    //     // create a new NFTStorage client using our API key
    //     const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

    //     // call client.store, passing in the image & metadata
    //     const resp = await nftstorage.store({
    //         image: f,
    //         name: 'image01',
    //         description: 'My test description for image01',
    //     });
    //     console.log('======== resp01: ', resp);
    // };

    return (
        <div>
            <header className="bg-sky-100 min-h-screen">
                {currentAccount ? (
                    // Probably logout onClick here?
                    <p className="absolute top-4 right-4 text-sm font-semibold text-sky-700 opacity-70">
                        Your Address: <span className="underline">{currentAccount}</span>
                    </p>
                ) : (
                    <button
                        type="button"
                        className="absolute top-4 right-4 inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        onClick={() => connectWalletHandler()}
                    >
                        Connect wallet
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 ml-2 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                            />
                        </svg>
                    </button>
                )}

                <Form onSubmit={onSubmit} />
            </header>
        </div>
    );
}

export default App;
