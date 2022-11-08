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

export async function getData(cids) {
    const client = GetStorageClient();
    let allResp = [];
    for (let i = 0; i < cids.length; i++) {
        const c = cids[i];
        const res = await client.get(c)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
            continue;
        }
        // unpack File objects from the response
        const files = await res.files();
        for (const file of files) {
            // console.log(`${file.cid} -- ${file.path} -- ${file.size} -- ${file.name}`);
            allResp = [...allResp, {
                'cid': c,
                'path': file.path,
                'size': file.size,
                'name': file.name,
                'fileUrl': `https://${c}.ipfs.w3s.link/${file.name}`,
            }];
        }
    }
    console.log("======= all resp: ", allResp);
    return allResp;
}