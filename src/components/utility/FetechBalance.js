import {ethers} from "ethers"
import { customSubstring } from "./AddressSubString"
export const FetchBalance = async(address)=>{
    
    let provider =  new ethers.providers.InfuraProvider('goerli')
    return await provider.getBalance(address).then(res=>{
        return formatWei(res)
    })
}

export const formatWei = (amount)=>{
    let balance = parseInt(amount.toHexString(),16).toString()
    let BalanceInETH = ethers.utils.formatEther(balance)
    return customSubstring(7,BalanceInETH);
}

