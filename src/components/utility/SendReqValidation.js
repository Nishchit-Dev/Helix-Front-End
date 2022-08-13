const joi = require("joi");

export const ReqValidate = async(data) => {
    
  const subReqObject = joi.object({
    send_account: joi.string().required(),
    to_address: joi.string().required(),
    send_Token_amount: joi.string().required(),
  });

  let flag1 = subReqObject.validate(data.tnx);

  const ReqObject = joi.object({
    _id: joi.string().required(),
    tnx: joi.object().required(),
  });

  let flag0 = ReqObject.validate(data);

  console.log("Checking ")
  if(flag0.error){
    return { message: flag0.error.details[0].message, flag: false };
  }else if(flag1.error) {
    return { message: flag1.error.details[0].message, flag: false };
  }else {
    return {flag:true}
  }

};
