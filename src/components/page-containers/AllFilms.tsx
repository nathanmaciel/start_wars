import React from "react";
import styled, { isStyledComponent } from "styled-components";
import { PoligonBox, RectangleBox } from "../SharedStyledElements";
import theme from '../../utils/globalStyleVariables';

const Navbar = React.lazy(() => import('../Navbar'))
const EachFilm = React.lazy(() => import('../EachFilm'))

const PageTitleBox = styled(RectangleBox)`
    height: 40px;
    width: clamp(310px, 60vw, 680px);
`

const PageTitle = styled.h2`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
`

export default function AllFilms(){

    let initialWidth: boolean = window.innerWidth > 600

    const [isHorizontal, setIsHorizontal] = React.useState(initialWidth)

    window.addEventListener('resize', () => {
        setIsHorizontal((prevValue) => {
            return window.innerWidth > 600
        })
    })

    return(
        <React.Fragment>
            <Navbar isHorizontal={isHorizontal} />
            <PageTitleBox>
                <PageTitle>Films</PageTitle>
            </PageTitleBox>
            <EachFilm isHorizontal={isHorizontal} filmName="name" episode={2} index={2} />
        </React.Fragment>
    )
}