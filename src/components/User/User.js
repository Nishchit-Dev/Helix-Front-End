import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerCenter,
  ContainerLowPadding,
  Content,
  FlexCol,
  FlexRow,
  Heading,
  Input,
  LoginBtn,
  MainContainer,
  Nav,
  Title,
} from "../General_Styled/General.style";
import QRCode from "react-qr-code";
import Header from "../header/header";
import { AddressSubstring } from "../utility/AddressSubString";
import { FetchBalance } from "../utility/FetechBalance";
import { getGasFees, parseWei, TotalAmount } from "../utility/TnxUtility";
import { ReqValidate } from "../utility/SendReqValidation";
import { sendCryptoAsset } from "../Request/sendCrypto";
import { recoverAddress } from "ethers/lib/utils";
import Scanner from "./QrScanner";
import Tnx from "./Transaction";
import LottieLoader from "./loader";
const User = () => {
  const useLocationData = useLocation();
  const [balance, setBalance] = useState(0.0);
  const [walletInfo, setWalletInfo] = useState(null);
  const [gas, setGas] = useState(0.0);
  //   setId(data.state.data._id)

  const [amount, setAmount] = useState(1);
  const [tot, setTot] = useState(0);
  const [lowBalance, setLowBalance] = useState(false);
  const [ReciverAddress, setReciverAddress] = useState("");
  const [qrFlag, setQrFlag] = useState(true);
  const [tnxFlag, setTnxFlag] = useState(false);
  const [sendFlag, setSendFlag] = useState(true);
  const [loader,setLoader] = useState(false)
  const [err,setErr]= useState(false)

  useEffect(() => {
    setWalletInfo(useLocationData.state.data);
    const call = async () => {
      if (useLocationData.state.data.Address) {
        let balance = await FetchBalance(useLocationData.state.data.Address);
        setBalance(balance);
      }
    };
    call();
  }, []);

  useEffect(() => {
    if (Total() < balance) {
      setLowBalance(false);
    } else {
      setLowBalance(true);
    }
  }, [amount]);

  const qrDisplay = () => {
    if (qrFlag) {
      return "none";
    } else {
      return "flex";
    }
  };

  useEffect(() => {
    let temp = TotalAmount(amount, gas);
    setTot(temp.toString());
    console.log("hello");
  }, [gas]);

  const Total = () => {
    let temp = TotalAmount(amount, gas);
    return temp;
  };
  const gasInEth = () => {
    return parseWei(gas);
  };

  const sendAsset = () => {
    console.log("hello");
    let tnxData = {
      _id: useLocationData.state.data._id,
      tnx: {
        send_account: useLocationData.state.data.Address,
        to_address: ReciverAddress,
        send_Token_amount: amount,
      },
    };

    ReqValidate(tnxData).then((res) => {
      console.log(res);
      if (res.flag) {
        sendCryptoAsset(tnxData)
          .then((res) => {
            if(!res.flag){
              setLoader(false)
              setErr(true)
            }
            setErr(false)
            setLoader(!loader)
            console.log(res);
            console.log(useLocationData.state);

            setSendFlag(!sendFlag);

            let timeInterval = setInterval(() => {
              const get = async () => {
                let Balance = await FetchBalance(
                  useLocationData.state.data.Address
                ).then((res) => {
                  console.log(res, balance);

                  if (res != balance) {
                    setBalance(res);
                    clearInterval(timeInterval);
                  }
                });
              };

              get();
            }, 5000);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    });
  };
  const send = (
    <>
      <MainContainer>
        <ContainerCenter>
          <Container>
            <ContainerCenter>
              <FlexRow>
                <FlexRow>
                  <Title style={{ padding: "0px" }}>
                    {"Sender's Account:"}
                  </Title>
                  <Content>{useLocationData.state.data.Address}</Content>
                </FlexRow>
                <FlexRow>
                  <Title style={{ padding: "0px" }}>{"Balance: "}</Title>
                  <Content>{balance + " "}ETH</Content>
                </FlexRow>
              </FlexRow>
            </ContainerCenter>{" "}
            <FlexRow>
              <Title>Reciver's Address </Title>
              <Input
                placeholder="Reciver's Address or ENS"
                value={ReciverAddress}
                onChange={(e) => {
                  setReciverAddress(e.target.value);
                }}
              />
            </FlexRow>
            <FlexRow>
              <Title>Amount</Title>
              <Input
                placeholder="Amount"
                type={"number"}
                min={0}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </FlexRow>
            <ContainerCenter
              style={{ justifyContent: "start", marginTop: "20px" }}
            >
              <FlexRow>
                {" "}
                <Title style={{ padding: "0px" }}>{"Gas Fees"}</Title>
                <FlexRow style={{ marginTop: "2px" }}>
                  <Nav>{gasInEth() + " ETH"}</Nav>
                </FlexRow>
              </FlexRow>
            </ContainerCenter>
            <ContainerCenter
              style={{ justifyContent: "start", marginTop: "20px" }}
            >
              <FlexRow>
                {" "}
                <Title style={{ padding: "0px" }}>Total Amount</Title>
                <FlexRow style={{ marginTop: "2px" }}>
                  <Nav>= Amount + Gas</Nav>
                </FlexRow>
                <Heading>={" " + Total() + " "}ETH</Heading>
              </FlexRow>
            </ContainerCenter>
            <FlexCol
              style={{ justifyContent: "space-between", marginTop: "20px" }}
            >
              <LoginBtn
                type={"submit"}
                value={"Cancel"}
                onClick={() => {
                  setSendFlag(!sendFlag);
                }}
              />
              <LoginBtn type={"submit"} value={"Send"} onClick={sendAsset} />
            </FlexCol>
            {
              !loader?( <ContainerCenter style={{justifyContent:"flex-end"}}>
              <Container style={{width:"70px",justifyContent:"flex-end"}}>{<LottieLoader />}</Container>
            </ContainerCenter>):null
            }
            {err?( <ContainerCenter>
              <Content>tnx Failed
                </Content>
                </ContainerCenter>):null}
           
            {/* </ContainerCenter> */}
          </Container>
        </ContainerCenter>
      </MainContainer>
    </>
  );
  const sendCrypto = async () => {
    setSendFlag(!sendFlag);
    setQrFlag(true);
    setTnxFlag(true);
    let gasFees = await getGasFees();
    setGas(gasFees);
  };
  return (
    <>
      <Header />
      {sendFlag ? (
        <ContainerCenter
          style={{
            margin: "20px 10px",
          }}
        >
          <Container>
            <FlexRow
              style={{ borderBottom: "1px black solid", cursor: "pointer" }}
            >
              <ContainerCenter>
                <FlexRow style={{ alignItems: "center" }}>
                  <Nav>Account</Nav>
                  <Content>
                    {AddressSubstring(useLocationData.state.data.Address)}
                  </Content>
                </FlexRow>
              </ContainerCenter>
            </FlexRow>
            <ContainerLowPadding>
              <ContainerCenter>
                <FlexCol>
                  <Heading>{balance} ETH</Heading>
                </FlexCol>
              </ContainerCenter>
            </ContainerLowPadding>

            <ContainerCenter style={{ marginTop: "20px" }}>
              <FlexCol style={{ alignItems: "center" }}>
                <LoginBtn
                  value={"Receive"}
                  type={"submit"}
                  onClick={() => {
                    setQrFlag(!qrFlag);
                    setSendFlag(true);
                    setTnxFlag(true);
                  }}
                />
                <LoginBtn
                  value={"Send"}
                  type={"submit"}
                  onClick={() => {
                    sendCrypto();
                  }}
                />
                <LoginBtn
                  value={"Transaction"}
                  type={"submit"}
                  onClick={() => {
                    setTnxFlag(!tnxFlag);
                    setSendFlag(true);
                    setQrFlag(true);
                  }}
                />
              </FlexCol>
            </ContainerCenter>
          </Container>
        </ContainerCenter>
      ) : null}

      <ContainerCenter style={{ display: qrDisplay(), marginBottom: "20px" }}>
        <Container>
          <QRCode value={useLocationData.state.data.Address} size={180} />
        </Container>
      </ContainerCenter>

      {!sendFlag ? send : null}
      {!tnxFlag ? <Tnx add={useLocationData.state.data.Address} /> : null}
    </>
  );
};

export default User;
