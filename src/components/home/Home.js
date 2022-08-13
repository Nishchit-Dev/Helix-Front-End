import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerLowPadding,
  Container,
  Content,
  FlexRow,
  Heading,
  Input,
  LoginBtn,
  MainContainer,
  Title,
  ContainerCenter,
} from "../General_Styled/General.style";
import Header from "../header/header";
import { Login } from "../Request/LoginReq";

const Home = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPasswrod] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    console.log(Email);
  }, [Email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Email &&
      Password &&
      Email != null &&
      Email != "" &&
      Password != null &&
      Password != ""
    ) {
      let data = {
        Email: Email,
        Password: Password,
      };

      Login(data)
        .then((res) => {
          console.log("Logged in");
          console.log(res);
            if(res.Address && res._id){
                navigator("/user", { state: { data: res } });
            }else{
                console.log("Email does not Exist")
            }
         
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
        console.log("Fill up the Input field")
    }
  };
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <FlexRow>
            <Heading>Login</Heading>
            <form onSubmit={handleSubmit}>
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
                <Title>Password</Title>
                <Input
                  type={"password"}
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                    console.log(Password);
                  }}
                ></Input>
              </FlexRow>
              <FlexRow style={{ alignItems: "flex-end", marginTop: "25px" }}>
                <LoginBtn type="submit" value={"Login"} />
              </FlexRow>
            </form>
          </FlexRow>

          <ContainerLowPadding style={{ marginTop: "10px" }}>
            <ContainerCenter>
              <Content>
                don't have account?{" "}
                <a
                  href="/SignUp"
                  style={{ color: "#708ae0", cursor: "pointer" }}
                >
                  SignUp
                </a>
              </Content>
            </ContainerCenter>
          </ContainerLowPadding>
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
