import React from "react";
import styled from "styled-components";
import { Logo, Button } from "../SharedStyledElements";
import { useNavigate } from "react-router-dom";

//Styled Elements

const LoginPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const LoginLogo = styled(Logo)`
    margin-top: 12vh;
    height: 8vh;
    width: 50vw;
`

const LoginBox = styled.form`
width: 280px;
height: 190px;
margin: 22vh 0 0 0;
border: ${({theme}) => theme.borderSize} solid #${({theme}) => theme.borderColor};
border-radius: ${({theme}) => theme.borderRadius};
background-color: #${({theme}) => theme.backgroundFadedColor};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Input = styled.input`
width: 200px;
height: 32px;
border: ${({theme}) => theme.borderSize} solid #${({theme}) => theme.borderFadedColor};
background-color: transparent;
border-radius: 5px;
font-weight: 300;
color: #${({theme}) => theme.fontColor};
font-family: ${({theme})=> theme.inputFontFamily};
text-align: center;
margin-bottom: 16px;
`
const LoginFailure = styled.p`
    padding: 0;
    margin: 0;
    color: #${({theme}) => theme.fontFocusColor};
    font-size: 10px;
    font-weight: 200;
    margin-top: -8px;
    margin-bottom: 8px;
    font-family: ${({theme})=> theme.inputFontFamily};
`

const LoginButton = styled(Button)`
    font-size: 14px;
    height: 30px;
    margin-top: 8px;
`

// Main logic

export default function Login(){

    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({
        user: "admin",
        password: "Admin123!"
    })

    const [loginFailure, setLoginFailure] = React.useState(false)

    function handleChange(event: any){
        let {name, value} = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function login(){
        if(formData.user == "admin" && formData.password == "Admin123!"){
            let expireTime = (new Date()).getTime() + 1000*60*10
            sessionStorage.setItem("token", JSON.stringify(expireTime))
            navigate('/films', { replace: true })
        } else{
            setLoginFailure(true)
            setFormData({
                user: "",
                password: ""
            })
        }
    }

    return(
        <LoginPage>
            <LoginLogo></LoginLogo>
            <LoginBox>
                <Input 
                type="text" 
                placeholder="username"
                name="user"
                value={formData.user}
                onChange={handleChange}
                />
                <Input 
                type="password" 
                placeholder="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                {loginFailure && <LoginFailure>Username and password do not match</LoginFailure>}
                <LoginButton type="button" onClick={login}>Log in</LoginButton>
            </LoginBox>
        </LoginPage>
    )
}