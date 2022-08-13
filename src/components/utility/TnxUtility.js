import {ethers} from "ethers"


export const getGasFees =async ()=>{
    let provider = new ethers.providers.InfuraProvider('rinkeby')

    let gas = await provider.getGasPrice();
    console.log(gas)

    let gasAmount = FormatWei(gas)
    console.log(gasAmount)
    return gasAmount
}
export const FormatWei = (amount)=>{
    let balance = parseInt(amount.toHexString(),16).toString()
    return balance
}

export const parseWei = (amount)=>{
    let BalanceInETH = ethers.utils.formatEther(amount)
    console.log(BalanceInETH)
    return BalanceInETH
}

export const TotalAmount = (amount,gas)=>{

    let total = parseFloat(amount)+  parseFloat(ethers.utils.formatEther(( parseFloat(gas))))
    console.log(total)
    return total
}