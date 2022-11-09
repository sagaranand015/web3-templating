import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import { uploadData, getData } from './storage';
import { getTemplate } from './helpers';
// - show all documents an address has uploaded to IPFS
// - swap out placeholder lorem
// - add document name field
// - maybe show success screen and link to the JSON after file is pushed to IPFS

function App() {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [showDocuments, setShowDocuments] = useState(false);
    const [ipfsUrl, setIpfsUrl] = useState('');

    const connectWalletHandler = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Please Install Metamask');
        }
        try {
            await ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(function (accounts) {
                    setCurrentAccount(accounts[0]);
                    console.log(
                        '======= Wallet connected, got the address: ',
                        accounts[0],
                    );
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const isWalletConnected = async () => {
            if (window.ethereum) {
                await window.ethereum
                    .request({ method: 'eth_requestAccounts' })
                    .then(function (accounts) {
                        setCurrentAccount(accounts[0]);
                    });
            }
        };
        isWalletConnected();

        // get documents from local storage
        const documents = [];
        const items = { ...localStorage };

        for (const key of Object.keys(items)) {
            if (key.startsWith('w3temp')) {
                documents.push(items[key]);
            }
        }

        setDocuments(documents);
    }, []);

    const onSubmit = async (data) => {
        // Handle form data or submission here
        console.log('form data: ', data);
        try {
            // upload to ipfs
            await uploadData(
                currentAccount,
                { data: { variables: data, document: getTemplate(data) } }, // passing in variables and raw document text
                data.documentName,
            ).then(function (resp) {
                console.log('upload done: ', resp);
                getData([resp]).then(function (getResp) {
                    console.log('======= from IPFS: ', getResp);
                    // set ipfs link on success screen
                    setIpfsUrl(getResp);
                    // set data on localstorage
                    localStorage.setItem(
                        `w3temp-${data.documentName}`,
                        JSON.stringify({ ...data, getResp }),
                    );
                });
            });
            setSubmitted(true);
        } catch (err) {
            console.log('submit err:', err);
        }
    };

    return (
        <div>
            <header className="bg-sky-100 min-h-screen pb-16">
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

                {documents.length > 0 && (
                    <>
                        {showDocuments ? (
                            <button
                                onClick={() => setShowDocuments(false)}
                                className="absolute top-4 left-4 inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Generate Documents
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowDocuments(true)}
                                className="absolute top-4 left-4 inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                See My Documents
                            </button>
                        )}
                    </>
                )}

                {showDocuments ? (
                    <div className="pt-20">
                        <div className="md:grid md:grid-cols-4 md:gap-6 align-center">
                            <div className="mt-5 md:col-start-2 md:col-end-4 md:mt-0 align-center">
                                <div className="px-4 sm:px-0 my-4 text-center">
                                    <h3 className="text-3xl font-bold leading-6 text-sky-700">
                                        Your Documents
                                    </h3>
                                    <p className="mt-1 text-md text-sky-700 opacity-70">
                                        See your generated documents below
                                    </p>
                                </div>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    {documents.map((doc) => {
                                        const parsedDoc = JSON.parse(doc);
                                        return (
                                            <div
                                                className="bg-white px-4 py-10 sm:p-6"
                                                key={parsedDoc.name}
                                            >
                                                <p>
                                                    Document Name:{' '}
                                                    {parsedDoc.documentName}
                                                </p>
                                                <p>
                                                    IPFS URL:{' '}
                                                    <a href={ipfsUrl}>
                                                        {parsedDoc.ipfsUrl}
                                                    </a>
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {submitted ? (
                            <div className="pt-20">
                                <div className="md:grid md:grid-cols-4 md:gap-6 align-center">
                                    <div className="mt-5 md:col-start-2 md:col-end-4 md:mt-0 align-center">
                                        <div className="overflow-hidden shadow sm:rounded-md">
                                            <div className="bg-white px-4 py-10 sm:p-6">
                                                <h3 className="text-3xl font-bold text-center">
                                                    Submitted to IPFS!
                                                </h3>
                                                <p className="flex items-center justify-center mt-4">
                                                    <button
                                                        type="button"
                                                        className="mr-4 items-center rounded-md border border-sky-600 bg-white text-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                                        onClick={() => setSubmitted(true)}
                                                    >
                                                        Generate Another
                                                    </button>
                                                    <a
                                                        href={ipfsUrl}
                                                        className="items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                                    >
                                                        See document on IPFS
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Form onSubmit={onSubmit} />
                        )}
                    </>
                )}
                {/* <button onClick={showFiles}>Show All Files (Demo)</button> */}
            </header>
        </div>
    );
}

export default App;
