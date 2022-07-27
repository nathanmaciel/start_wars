import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { isStyledComponent } from "styled-components";
import { SmallPoligonBox, RectangleBox, GenericInsideText, FilmName, EpisodeNumber } from "./SharedStyledElements";

const FilmBox = styled(SmallPoligonBox)`
    margin-top: clamp(15px, 3vw, 30px);
    height: clamp(50px, 9vw, 100px);
    width: clamp(150px, 28vw, 320px);
`

const InvertedFilmBox = styled(FilmBox)`
    transform:scaleX(-1);
`
const FilmBoxForMobile = styled(FilmBox)`
    background-image: url("data:image/svg+xml,%3Csvg width='50' height='16' viewBox='0 0 309 97' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.787 0.25C84.1677 0.25 85.287 1.36929 85.287 2.75C85.287 4.40685 86.6302 5.75 88.287 5.75H94.765C95.5545 5.75 96.3339 5.57193 97.045 5.22904L106.394 0.721348C107.038 0.411113 107.743 0.25 108.457 0.25H144.697C145.63 0.25 146.543 0.525117 147.321 1.04098L153.106 4.87576C153.966 5.44592 154.975 5.75 156.007 5.75H276.393C277.159 5.75 277.915 5.58261 278.609 5.25956L288.417 0.693735C289.045 0.40145 289.729 0.25 290.422 0.25H303.5C306.123 0.25 308.25 2.37665 308.25 5V92C308.25 94.6234 306.123 96.75 303.5 96.75H291.741C290.286 96.75 288.91 96.0826 288.01 94.9391L279.198 83.7515C278.202 82.4876 276.682 81.75 275.074 81.75H157.448C155.538 81.75 153.779 82.7875 152.854 84.4591L147.412 94.299C146.575 95.8113 144.984 96.75 143.255 96.75H108.639C107.815 96.75 107.004 96.5353 106.288 96.127L97.182 90.9385C96.3901 90.4873 95.4943 90.25 94.5829 90.25H86.25C84.317 90.25 82.75 91.817 82.75 93.75C82.75 95.4069 81.4069 96.75 79.75 96.75H25.0093C23.3524 96.75 22.0093 95.4069 22.0093 93.75C22.0093 91.817 20.4423 90.25 18.5093 90.25H12.5648C10.6318 90.25 9.06481 91.817 9.06481 93.75C9.06481 95.4069 7.72167 96.75 6.06481 96.75H4.90741C2.61133 96.75 0.75 94.8887 0.75 92.5926V4.40741C0.75 2.11134 2.61134 0.25 4.90741 0.25H6.56482C7.94553 0.25 9.06481 1.36929 9.06481 2.75C9.06481 4.40685 10.408 5.75 12.0648 5.75H19.0093C20.6661 5.75 22.0093 4.40685 22.0093 2.75C22.0093 1.36929 23.1285 0.25 24.5093 0.25H82.787Z' 
    fill='%23${({theme}) => theme.backgroundColor}' 
    fill-opacity='${({theme}) => theme.backgroundOpacity}' 
    stroke='%23${({theme}) => theme.borderColor}' 
    stroke-width='${({theme}) => parseFloat(theme.borderSize.replace("px", "")) * 1.8}px'/%3E%3C/svg%3E");
    width: clamp(310px, 60vw, 680px);
    height: clamp(120px, 30vw, 200px);
`

const InsideText = styled(GenericInsideText)`
    margin-bottom: clamp(5px, 1vw, 10px);
    cursor: pointer;
    &:hover {
        color: #${({theme}) => theme.fontFocusColor};
        transform: scale(1.1);
    }
`
const InvertedFilmName = styled(FilmName)`
    transform:scaleX(-1);
`
const InvertedEpisodeNumber = styled(EpisodeNumber)`
    transform:scaleX(-1);
`

export default function EachFilm(props: any){

    const {filmName, episode, isHorizontal, index, url} = props

    const navigate = useNavigate()

    function handleClick(url: string){
        console.log(url)
        let adress = url.replace("https://swapi.dev/api/films", "")
        navigate("/films" + adress, {replace: true})
    }

    return(
        <React.Fragment>
            { (isHorizontal && index % 2 == 1)  &&
                        <FilmBox>
                            <InsideText onClick={() => handleClick(url)}>
                                <FilmName>{filmName}</FilmName>
                                <EpisodeNumber>episode {episode}</EpisodeNumber>
                            </InsideText>
                        </FilmBox>
            }
            { (isHorizontal && index % 2 == 0)  &&
                        <InvertedFilmBox>
                            <InsideText onClick={() => handleClick(url)}>
                                <InvertedFilmName>{filmName}</InvertedFilmName>
                                <InvertedEpisodeNumber>episode {episode}</InvertedEpisodeNumber>
                            </InsideText>
                        </InvertedFilmBox>
            }
            {!isHorizontal &&
                <FilmBoxForMobile>
                    <InsideText onClick={() => handleClick(url)}>
                        <FilmName>{filmName}</FilmName>
                        <EpisodeNumber>episode {episode}</EpisodeNumber>
                    </InsideText>
                </FilmBoxForMobile>
            }
        </React.Fragment>
    )
}