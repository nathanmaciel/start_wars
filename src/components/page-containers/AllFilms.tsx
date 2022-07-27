import React from "react";
import styled from "styled-components";
import { LoadingAnimation, RectangleBox } from "../SharedStyledElements";
import EachFilm from "../EachFilm";
import Navbar from "../Navbar";

type Film = {
    name: string;
    url: string;
    episode: number
}

const PageTitleBox = styled(RectangleBox)`
    height: 40px;
    width: clamp(310px, 60vw, 680px);
    margin-top: clamp(30px, 3vw, 40px);
`

const PageTitle = styled.h2`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
`
const FilmsContainer = styled.div`
    width: clamp(310px, 60vw, 680px);
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const VerticalFilmsContainer = styled(FilmsContainer)`
    flex-wrap: no-wrap;
`
const AllFilmsLoagindContainer = styled.div`
    width: clamp(310px, 60vw, 680px);
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function AllFilms(){

    
    const initialWidth: boolean = window.innerWidth > 600
    const [isHorizontal, setIsHorizontal] = React.useState(initialWidth)
    const [filmsList, setFilmsList] = React.useState<Film[]>([])

    window.addEventListener('resize', () => {
        setIsHorizontal((prevValue) => {
            return window.innerWidth > 600
        })
    })

    React.useEffect(() => {
        fetch("https://swapi.dev/api/films/")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            setFilmsList((prevValue) => {
                return data.results.map((element: any) => {
                    return {
                        name: element.title,
                        url: element.url,
                        episode: element.episode_id
                    }
                })
            })
        })

    }, [])


    return(
        <React.Fragment>
            <Navbar isHorizontal={isHorizontal} />
            <PageTitleBox>
                <PageTitle>Films</PageTitle>
            </PageTitleBox>
            { (isHorizontal && filmsList.length === 0) && 
                <AllFilmsLoagindContainer><LoadingAnimation></LoadingAnimation></AllFilmsLoagindContainer>
            }      
            { isHorizontal && <FilmsContainer>
                {
                    filmsList.map((element, index) => {
                        return(
                            <EachFilm 
                            key={index}
                            isHorizontal={isHorizontal} 
                            filmName={element.name} 
                            episode={element.episode} 
                            url={element.url}
                            index={index} />
                        )
                    })
                }
            </FilmsContainer>
            }
            { (!isHorizontal && filmsList.length === 0) && 
                <AllFilmsLoagindContainer><LoadingAnimation></LoadingAnimation></AllFilmsLoagindContainer>
            }   
            { !isHorizontal && 
            <VerticalFilmsContainer>
                {
                    filmsList.map((element, index) => {
                        return(
                            <EachFilm 
                            key={index}
                            isHorizontal={isHorizontal} 
                            filmName={element.name} 
                            url={element.url}
                            episode={element.episode} 
                            index={index} />
                        )
                    })
                }
            </VerticalFilmsContainer>
            }
        </React.Fragment>
    )
}