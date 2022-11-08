import { Web3Storage } from 'web3.storage';
import { WEB3_STORAGE_KEY } from './constants';

export function GetStorageClient() {
    const client = new Web3Storage({ token: WEB3_STORAGE_KEY });
    return client;
}

export async function uploadData(address, data, name) {
    const client = GetStorageClient();
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const files = [
        new File([blob], name, { type: 'application/json' })
    ]
    return await client.put(files);
}