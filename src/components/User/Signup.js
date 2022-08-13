import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerCenter,
  ContainerLowPadding,
  Content,
  FlexRow,
  Heading,
  Input,
  LoginBtn,
  MainContainer,
  Title,
} from "../General_Styled/General.style";
import Header from "../header/header";
import { signup } from "../Request/SignUpReq";
import joi from 'joi'
import User from "./User";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPasswrod] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Username, setUsername] = useState("");
  const navigator = useNavigate();

 

  const validate = (data)=>{
    const FormObject = joi.object({
        Username:joi.string().min(3).required(),
        Password:joi.string().min(6).required(),
        Email:joi.string().required().email({tlds:{allow: false}})
      })
    return FormObject.validate(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { Username: Username, Password: Password, Email: Email };
    let validation = validate(data).error

    if(validation){
    
        console.log({message:validation.details[0],flag:false}) 
   
    }else{
        signup(data)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          Navigate();
        });
    }

   
  };

  const Navigate = () => {
    navigator('/')
  };
  return (
    <>
    <Header/>
      <MainContainer>
        <Container>
          <form onSubmit={handleSubmit}>
            <FlexRow>
              <Heading>SignUp</Heading>

              <FlexRow>
                <Title>Email</Title>
                <Input
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Input>
              </FlexRow>
              <FlexRow>
                <Title>Username</Title>
                <Input
                  placeholder="Username"
                  value={Username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></Input>
              </FlexRow>
              <FlexRow>
                <Title>Password</Title>

                <Input
                  placeholder="Password"
                  value={Password}
                  type={"password"}
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                ></Input>
              </FlexRow>
              <FlexRow>
                <Title>Confirm Password</Title>
                <Input
                  placeholder="Confirm Password"
                  value={ConfirmPassword}
                  type={"password"}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></Input>
              </FlexRow>
            </FlexRow>
            <FlexRow style={{ alignItems: "flex-end", marginTop: "25px" }}>
              <LoginBtn type="submit" value={"SignUp"} />
            </FlexRow>
          </form>

          <ContainerLowPadding style={{ marginTop: "10px" }}>
            <ContainerCenter>
              <Content>
                Have Account?{" "}
                <a href="/" style={{ color: "#708ae0", cursor: "pointer" }}>
                  SignIn
                </a>
              </Content>
            </ContainerCenter>
          </ContainerLowPadding>
        </Container>
      </MainContainer>
    </>
  );
};

export default SignUp;
