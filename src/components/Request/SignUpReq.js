const axios = require('axios').default

let server_URL = 'http://localhost:4545/'

export const signup =async (data)=>{
    return axios.post(server_URL+'user/signup',{
        Username:data.Username,
        Password:data.Password,
        Email:data.Email
    }).then(res=>{
        return {
            Username:res.data.Username,
            Email:res.data.Email,
            Address:res.data.address
        }
    }).catch(err=>{
        return err
    })
}

