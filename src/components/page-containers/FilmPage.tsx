import React from "react";
import styled from "styled-components";
import FilmPageHeader from "../FilmPageHeader";
import Navbar from "../Navbar";
import { } from "../SharedStyledElements";



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
            <FilmPageHeader isHorizontal={isHorizontal}></FilmPageHeader>
        </React.Fragment>
    )
}