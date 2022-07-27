import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { couldStartTrivia } from "typescript";
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

type Lists = {
    'characters': string[];
    'planets': string[];
    'starships': string[];
    'vehicles': string[];
    'species': string[]
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

    let firstAcess = {
        "0": ""
    }

    let storedData = JSON.parse(sessionStorage.getItem("storedData") || JSON.stringify(firstAcess))

    const initialWidth: boolean = window.innerWidth > 700

    const [isHorizontal, setIsHorizontal] = React.useState(initialWidth)

    const [headerData, setHeaderData] = React.useState<HeaderData>()

    const [storage, setStorage] = React.useState(storedData)

    const [lists, setLists] = React.useState({
        started: true
    })

    const [listsInfo, setListsInfo] = React.useState<any[]>([])

    const allListsArray  =  ["characters", "planets", "starships", "vehicles", "species"]

    window.addEventListener('resize', () => {
        setIsHorizontal((prevValue) => {
            return window.innerWidth > 700
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
                handleLists(data)
            })        
    }, [])


    function handleLists(data: any){
        allListsArray.map((list)=> {
            data[list].map((element: any) => {
                if(storedData[element.replace("https://swapi.dev/api/", "")] == undefined){
                    fetch(element).then(resp => resp.json())
                    .then((elemData) => {
                        setLists((prevLists) => {
                            return{
                                ...prevLists,
                                [element.replace("https://swapi.dev/api/", "")]: elemData.name
                            }
                        })
                        setStorage((prevStorage: any) => {
                            return {
                                ...prevStorage,
                                [element.replace("https://swapi.dev/api/", "")]: elemData.name
                            }
                        })
                    })
                } else {
                    setLists((prevLists) => {
                        return{
                            ...prevLists,
                            [element.replace("https://swapi.dev/api/", "")]: storedData[element.replace("https://swapi.dev/api/", "")]
                        }
                    })
                }
            })
        })
    }

    function saveInSessionStorage(){
        sessionStorage.setItem("storedData", JSON.stringify(storage))
    }


    React.useEffect(() => {
        getFilmData()
    }, [getFilmData])

    React.useEffect(()=> {
        setListsInfo((prev: any) => {
            return Object.entries(lists)
        })
    }, [lists])

    React.useEffect(()=> {
        saveInSessionStorage()
    }, [storage])

    return(
        <React.Fragment>
            <Navbar isHorizontal={isHorizontal}/>
            <PageInfoContainer>
                <FilmPageHeader isHorizontal={isHorizontal} info={headerData}></FilmPageHeader>
                <FilmPageListInfo isHorizontal={isHorizontal} info={listsInfo}></FilmPageListInfo>
            </PageInfoContainer>
        </React.Fragment>
    )
}