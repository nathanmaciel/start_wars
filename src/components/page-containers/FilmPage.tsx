import React from "react";
import styled from "styled-components";
import FilmPageHeader from "../FilmPageHeader";
import FilmPageListInfo from "../FilmPageListInfo";
import Navbar from "../Navbar";
import { } from "../SharedStyledElements";

const PageInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



export default function FilmPage(){
    let initialWidth: boolean = window.innerWidth > 600

    const [isHorizontal, setIsHorizontal] = React.useState(initialWidth)

    window.addEventListener('resize', () => {
        setIsHorizontal((prevValue) => {
            return window.innerWidth > 600
        })
    })


    return(
        <React.Fragment>
            <Navbar isHorizontal={isHorizontal}/>
            <PageInfoContainer>
                <FilmPageHeader isHorizontal={isHorizontal}></FilmPageHeader>
                <FilmPageListInfo isHorizontal={isHorizontal}></FilmPageListInfo>
            </PageInfoContainer>
        </React.Fragment>
    )
}