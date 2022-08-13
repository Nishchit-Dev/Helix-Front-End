import { config } from './config'

const axios = require('axios').default

let server_URL = 'http://localhost:4545/'

export const Login = async (data)=>{

    return axios.post(config.Development.serverURL+'user/login',{
        Email:data.Email,
        Password:data.Password
    }).then(res=>{
        
        return {
            _id:res.data._id,
            Username:res.data.Username,
            Address:res.data.address
        }
    }).catch(err=>{
        return err;
    })
}
