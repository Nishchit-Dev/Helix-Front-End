import React from "react";
import {
  Container,
  ContainerCenter,
  ContainerLowPadding,
  Content,
  Flex,
  FlexCol,
  FlexRow,
  Heading,
  MainContainer,
  Nav,
} from "../General_Styled/General.style";

const Header = () => {
  //
  return (
    <>
      <ContainerCenter style={{ background: "#E8E8E8"}}>
        <FlexRow style={{alignItems:"center"}}>
          <Heading style={{ color: "#495464"  }}>
            Helix
          </Heading>
          <FlexCol style={{padding:"6px"}}>
            <Nav href="/">Login</Nav>
            <Nav  href="/signup">Signup</Nav>
          
          </FlexCol>
        </FlexRow>
      </ContainerCenter>
    </>
  );
};

export default Header;
