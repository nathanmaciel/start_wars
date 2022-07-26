import React from "react";
import styled, { isStyledComponent } from "styled-components";
import { SmallPoligonBox, RectangleBox } from "../SharedStyledElements";
import theme from '../../utils/globalStyleVariables';

type Film = {
    name: string;
    url: string;
    episode: number
}

const Navbar = React.lazy(() => import('../Navbar'))
const EachFilm = React.lazy(() => import('../EachFilm'))

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
const HorizontalFilmsContainer = styled(FilmsContainer)`
    flex-wrap: no-wrap;
`

export default function AllFilms(){

    let initialWidth: boolean = window.innerWidth > 600

    const [isHorizontal, setIsHorizontal] = React.useState(initialWidth)
    const [filmsList, setFilmsList] = React.useState<Film[]>([])

    window.addEventListener('resize', () => {
        setIsHorizontal((prevValue) => {
            return window.innerWidth > 600
        })
    })

    React.useEffect(() => {
        fetch("https://swapi.dev/api/films/")
        .then(resp => resp.json())
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

    console.log(filmsList)

    return(
        <React.Fragment>
            <Navbar isHorizontal={isHorizontal} />
            <PageTitleBox>
                <PageTitle>Films</PageTitle>
            </PageTitleBox>
            { isHorizontal && <FilmsContainer>
                {
                    filmsList.map((element, index) => {
                        return(
                            <EachFilm 
                            key={index}
                            isHorizontal={isHorizontal} 
                            filmName={element.name} 
                            episode={element.episode} 
                            index={index} />
                        )
                    })
                }
            </FilmsContainer>
            }
            { !isHorizontal && 
            <HorizontalFilmsContainer>
                {
                    filmsList.map((element, index) => {
                        return(
                            <EachFilm 
                            key={index}
                            isHorizontal={isHorizontal} 
                            filmName={element.name} 
                            episode={element.episode} 
                            index={index} />
                        )
                    })
                }
            </HorizontalFilmsContainer>
            }
        </React.Fragment>
    )
}