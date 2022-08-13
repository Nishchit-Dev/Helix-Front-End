import { config } from './config'
const axios = require('axios').default

let server_URL = 'http://localhost:4545/'

export const sendCryptoAsset = async(data)=>{

    return axios.post(config.Development.serverURL+'user/send',data).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}