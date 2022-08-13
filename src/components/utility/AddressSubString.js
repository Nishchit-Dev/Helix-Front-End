
export const AddressSubstring = (add)=>{
    return add.substring(0,5)+"..."+add.substring(add.length-5,add.length)
}
export const customSubstring = (length,amount)=>{
    return amount.substring(0,length)
}