import { config } from './config'

const axios = require('axios').default


export const FetchTnx = async (data)=>{

    return axios.post(config.Development.serverURL+'user/tnx',{
       add:data
    }).then(res=>{
        return res
    }).catch(err=>{
        return err;
    })
}
