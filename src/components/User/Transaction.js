import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerCenter,
  Content,
  Flex,
  FlexCol,
  FlexRow,
  MainContainer,
  Nav,
  Title,
} from "../General_Styled/General.style";
import { FetchTnx } from "../Request/TnxRequest";
import { AddressSubstring, customSubstring } from "../utility/AddressSubString";

const Tnx = ({ add }) => {
  const [data, setData] = useState(null);
  const [Add, setAdd] = useState(null);

  useEffect(() => {
    setAdd(add);
    FetchTnx(add).then((res) => {
      console.log(res.data);
      console.log("data", data);
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    console.log("dataChanged:", data);
  }, [data]);
  return (
    <>
      <ContainerCenter>
        <Container>
          {data
            ? data.map((ele) => {
                return (
                  <Container style={{borderBottom:'1px black solid'}}>
                    <FlexCol>

                    <FlexRow style={{padding:"0px",width:'400px',justifyContent:"space-between",alignItems:"baseline"}}>
                       
                      <FlexRow>
                        <Title style={{padding:"0px"}}> From :</Title>
                        <Nav>{AddressSubstring(ele.From)}</Nav>
                      </FlexRow>
                      <FlexRow>
                        <Title style={{padding:"0px"}}>To :</Title>
                        <Nav>{AddressSubstring(ele.To)}</Nav>
                      </FlexRow> 
                      <FlexRow>
                      <Title style={{padding:"0px"}}>Value :</Title>
                      <Nav>{(ele.Value)+" ETH"}</Nav>
                    </FlexRow>
                    </FlexRow>
                    <ContainerCenter style={{justifyContent:"center",alignItems:"center"}}>
                    <Title>{ele.To==Add?<div style={{color:'white',background:"#83BD75",padding:"10px",borderRadius:"5px"}}>Received</div>:<div style={{color:'white',background:"#708ae0",padding:"10px",borderRadius:"5px"}}>Send</div>}</Title>
                    </ContainerCenter>
                    </FlexCol>


                   
                  </Container>
                );
              })
            : null}
        </Container>
      </ContainerCenter>
    </>
  );
};

export default Tnx;
