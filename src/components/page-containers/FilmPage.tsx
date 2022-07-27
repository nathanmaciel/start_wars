import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FilmPageHeader from "../FilmPageHeader";
import FilmPageListInfo from "../FilmPageListInfo";
import Navbar from "../Navbar";
import { } from "../SharedStyledElements";

type HeaderData = {
    title:string;
    episode_id: number;
    opening_crawl:string;
    director: string;
    producer: string;
    release_date: string;
    created: string;
    edited: string;
}

const PageInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



export default function FilmPage(){

    let {id} = useParams()

    const navigate = useNavigate()

    const initialWidth: boolean = window.innerWidth > 600

    const [isHorizontal, setIsHorizontal] = React.useState(initialWidth)

    const [headerData, setHeaderData] = React.useState<HeaderData>()

    window.addEventListener('resize', () => {
        setIsHorizontal((prevValue) => {
            return window.innerWidth > 600
        })
    })

    const getFilmData = React.useCallback( async () => {
        return await fetch("https://swapi.dev/api/films/" + id + "/")
            .then(resp => resp.json())
            .then(data => {
                setHeaderData({
                    title: data.title,
                    episode_id: data.episode_id,
                    opening_crawl: data.opening_crawl,
                    director: data.director,
                    producer: data.producer,
                    release_date: data.release_date,
                    created: data.created,
                    edited: data.edited,
                })
            })        
    }, [])

    React.useEffect(() => {
        getFilmData()

    }, [getFilmData])

    return(
        <React.Fragment>
            <Navbar isHorizontal={isHorizontal}/>
            <PageInfoContainer>
                <FilmPageHeader isHorizontal={isHorizontal} info={headerData}></FilmPageHeader>
                <FilmPageListInfo isHorizontal={isHorizontal}></FilmPageListInfo>
            </PageInfoContainer>
        </React.Fragment>
    )
}