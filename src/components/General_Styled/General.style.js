import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  height: fit-content;
  margin: auto;
  padding: 30px;
  background: #f4f4f2;
  border-radius: 7px;
`;
export const ContainerCenter = styled.div`
  display:flex;
  justify-content:center;
`;
export const ContainerLowPadding = styled.div`
  height: fit-content;
  margin: auto;
  padding: 10px;
  background: #f4f4f2;
  border-radius: 7px;
`;

export const Input = styled.input`
  font-family: "Outfit";
  font-weight: 300;
  font-size: 16px;
  margin: 2px 2px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.07);
  padding: 6px 6px 6px 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13px;
`;
export const Title = styled.h2`
  font-family: "Outfit";
  font-weight: 500;
  font-size: 18px;
  padding-left: 5px;
`;

export const Content = styled.p`
  font-family: "Outfit";
  font-weight: 400;
  font-size: 16px;
`;
export const Heading = styled.h1`
  font-family: "Outfit";
  font-weight: 700;
  font-size: 20px;
  padding-left: 5px;
`;

export const LoginBtn = styled.input`
  font-family: "Outfit";
  font-weight: 400;
  font-size: 16px;
  padding: 4px 20px;
 
  background: #495464;
  color: #f4f4f2;
  border-radius: 3px;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    opacity: 1;
    
  }
`;
