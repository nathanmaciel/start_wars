import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { FilmName, LoadingAnimation } from "../SharedStyledElements"
import React from "react"

const IntirePageFiller = styled.div`
    height: 90vh;
    width 90vw;
    display: flex;
    flex-direction: column;
    justity-content: center;
    align-items: center;
`

export default function PageFiller(props: any){
    const {type} = props
    const navigate = useNavigate()

    if(type === 'redirect'){
        let redirect = setTimeout(() => {
            navigate('/login', {replace: true})
        }, 2000);
    }


    return(
        <IntirePageFiller>
            <React.Fragment>
            {type === 'redirect' && <FilmName style={{marginTop: '30px', fontWeight: '300'}}>Time out. Login again.</FilmName>}
            {type === 'loading' && <LoadingAnimation style={{height: '100%', transform: 'translate(0, 50%)'}}></LoadingAnimation>}
            </React.Fragment>
        </IntirePageFiller>
    )
}