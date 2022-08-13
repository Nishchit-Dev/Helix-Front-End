import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Scanner = () => {
  const [data, setData] = useState("");
  return(  <>
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);
        }

        if (!!error) {
          console.info(error);
        }
      }}
      style={{ width: '100%' }}
    />
    <p>{data}</p>
  </>)
  
};

export default Scanner;
