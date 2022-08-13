import React, { useState } from 'react'
import { Container, FlexRow, Input, MainContainer, Title } from '../General_Styled/General.style'

const Login = ()=>{


    return (
        <>
           <MainContainer>
            <Container>
                <FlexRow>
                    <FlexRow>
                        <Title>Email</Title>
                        <Input placeholder='Email'></Input>
                    </FlexRow>
                    <FlexRow>
                        <Title>Username</Title>
                        <Input placeholder='Email'></Input>
                    </FlexRow>
                    <FlexRow>
                        <Title>Password</Title>
                        <Input placeholder='Email'></Input>
                    </FlexRow>

                </FlexRow>
            </Container>
           </MainContainer>
        </>
    )
}

export default Login