import React from "react";
import styled from "styled-components";
import { Button, Logo } from "./SharedStyledElements";

const NavLogo = styled(Logo)`
    height: 80px;
    width: 120px;
    margin: 0 50px 0 50px;
`

const NavButton = styled(Button)`
    margin: 0 20px 0 20px;
    font-size: 12px;
    height: 25px;
`

const NavHorizontalContainer = styled.nav`
    width: 100%;
    height: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavVerticalContainer = styled(NavHorizontalContainer)`
    flex-direction: column;
`
const NavButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export default function Navbar(props: any){

    const isHorizontal = props.isHorizontal

    return(
        <React.Fragment>
            {
            isHorizontal && 
            (<NavHorizontalContainer>
                <NavButton>Films</NavButton>
                <NavLogo></NavLogo>
                <NavButton>Log out</NavButton>
            </NavHorizontalContainer>)
        }
        {
            !isHorizontal &&
            <NavVerticalContainer>
                <NavLogo></NavLogo>
                <NavButtonContainer>
                    <NavButton>Log out</NavButton>
                    <NavButton>Films</NavButton>
                </NavButtonContainer>
            </NavVerticalContainer>
        }
        </React.Fragment>
    )
}