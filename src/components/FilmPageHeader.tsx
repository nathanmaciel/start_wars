import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EpisodeNumber, FilmName, GenericInsideText, SmallPoligonBox, RectangleBox, LoadingAnimation } from "./SharedStyledElements";

const MobileFilmTitle = styled(RectangleBox)`
    margin: 10px;
    width: clamp(310px, 60vw, 620px);
    height: 60px;
`
const DesktopFilmTitle = styled.div`
	background-image: url("data:image/svg+xml,%3Csvg width='480' height='125' viewBox='0 0 480 125' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M432.096 1.20642C431.482 1.20541 430.874 1.33017 430.31 1.57301L415.903 7.7715C415.213 8.0683 414.47 8.22079 413.719 8.21956L398.116 8.19401C397.457 8.19293 396.804 8.07342 396.187 7.84117L379.101 1.40518C378.598 1.2155 378.064 1.11772 377.526 1.11649L108.723 0.501845C108.246 0.500756 107.773 0.57534 107.319 0.722811L84.8762 8.0261C84.308 8.211 83.7135 8.30212 83.1162 8.29589L31.1451 7.75339C30.2975 7.74454 29.4636 7.53988 28.7084 7.1554L18.0275 1.71723C17.459 1.42779 16.8354 1.26262 16.198 1.23268L5.8183 0.744999C3.25591 0.62461 1.10967 2.66739 1.1033 5.23267L0.820603 119.209C0.814432 121.697 2.82866 123.716 5.31682 123.716L16.272 123.716C16.8805 123.716 17.4829 123.593 18.0426 123.353L33.8424 116.595C34.5226 116.304 35.2544 116.153 35.994 116.152L83.155 116.044C83.728 116.042 84.2976 116.131 84.8431 116.305L107.34 123.504C107.78 123.645 108.239 123.717 108.701 123.718L377.08 124.332C377.7 124.334 378.315 124.207 378.884 123.96L396.059 116.498C396.751 116.197 397.497 116.042 398.251 116.042L413.536 116.042C414.417 116.042 415.285 116.254 416.067 116.659L430.203 123.991C430.848 124.325 431.564 124.498 432.29 124.496L441.807 124.461C443.828 124.454 445.464 122.815 445.469 120.794C445.476 118.213 447.573 116.125 450.154 116.129L461.16 116.147C463.735 116.151 465.817 118.242 465.81 120.817C465.805 122.839 467.441 124.481 469.463 124.484L474.001 124.492C476.487 124.496 478.506 122.484 478.512 119.999L478.796 5.78287C478.802 3.2976 476.792 1.27959 474.307 1.27553L469.129 1.26705C467.46 1.26432 466.104 2.61492 466.099 4.2837C466.094 6.50476 464.289 8.30235 462.068 8.29871L449.77 8.27858C447.549 8.27494 445.753 6.47146 445.758 4.2504C445.763 2.58161 444.413 1.22658 442.744 1.22385L432.096 1.20642Z' 
    fill='%23${({theme}) => theme.backgroundColor}' 
    fill-opacity='${({theme}) => theme.backgroundOpacity}' 
    stroke='%23${({theme}) => theme.borderColor}'
    stroke-width='${({theme}) => parseFloat(theme.borderSize.replace("px", "")) * 1.8}px'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(250px, 35vw, 350px);
    height: 100px;
`
const MobileTechInfo = styled(SmallPoligonBox)`
    margin: 10px;
    width: clamp(310px, 60vw, 680px);
    height: clamp(120px, 30vw, 200px);
`
const DesktopTechInfo = styled(RectangleBox)`
    width: clamp(100px, 25vw, 250px);
    height: 90px;
`
const TechInfoText = styled.p`
    width: 90%;
    font-weight: 200;
    font-size: 14px;
    color: #${({theme}) => theme.fontColor};
`
const MobileOpeningCrawlBox = styled(RectangleBox)`
    justify-content: flex-start;
    width: clamp(310px, 60vw, 620px);
    height: clamp(120px, 25vw, 180px);
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 2px #${({theme}) => theme.borderFadedColor}; 
        border-radius: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 2px #${({theme}) => theme.borderFadedColor}; 
    }
`
const DesktopOpeningCrawl = styled(MobileOpeningCrawlBox)`
    width: clamp(100px, 28vw, 250px);
    height: 90px;
`
const MobileHeaderContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DesktopHeaderContainer = styled(MobileHeaderContainer)`
    margin-top: 5px;
    width: clamp(470px, calc(88vw + 20px), 880px);
    justify-content: space-between;
    flex-direction: row;
`

const OpeningCrawlSpan = styled.span`
    font-size: 12px;
    text-transform: uppercase;
`

export default function FilmPageHeader(props: any){
    const navigate = useNavigate()

    const {isHorizontal, info} = props

    let director = ""
    let opening_crawl : string[] = []
    let episode_id = ""
    let producer= ""
    let title = ""
    let release_date = ""

    if(info !== undefined){
        director = info.director
        try{
            opening_crawl = info.opening_crawl.split("\r\n")
        } catch(err){
            navigate("/films", {replace: true})
        }
        episode_id = info.episode_id
        producer= info.producer
        title = info.title
        let date = new Date((new Date(info.release_date)).getTime() + 1000*60*60*12)
        release_date = new Intl.DateTimeFormat('en-US').format(date)
    }

    const Title = (
        <GenericInsideText>
            <FilmName>{title}</FilmName>
            <EpisodeNumber>episode {episode_id}</EpisodeNumber>
        </GenericInsideText>
    )

    const TechInfo = (
        <GenericInsideText>
            <TechInfoText>
                <b>Director:</b> {director} <br/>
                <b>Producer{producer.includes(",")? "s" : ""}:</b> {producer} <br/>
                <b>Release date:</b> {release_date}
            </TechInfoText>
        </GenericInsideText>
    )

    const OpeningCrawl = (
        <React.Fragment>
            <OpeningCrawlSpan key="100"><br/></OpeningCrawlSpan>
            {opening_crawl.map((element, index) => {
                if(element === ""){
                    return <OpeningCrawlSpan key={index}><br/></OpeningCrawlSpan>
                } else {
                    return <OpeningCrawlSpan key={index}>{element}</OpeningCrawlSpan>
                }
            }
            )}
            <OpeningCrawlSpan key="101"><br/></OpeningCrawlSpan>
        </React.Fragment>
    )

    return(
        <React.Fragment>
            {
                !isHorizontal &&
                <MobileHeaderContainer>
                    <MobileFilmTitle>
                        { title?  Title : <LoadingAnimation></LoadingAnimation>}
                    </MobileFilmTitle>
                    <MobileTechInfo>
                        { title ? TechInfo : <LoadingAnimation style={{transform: 'translate(0, 20%)'}}></LoadingAnimation>}
                    </MobileTechInfo>
                    <MobileOpeningCrawlBox>
                        {title ? OpeningCrawl : <LoadingAnimation style={{transform: 'translate(0, 20px)'}}></LoadingAnimation>}
                    </MobileOpeningCrawlBox>
                </MobileHeaderContainer>
            }
            {
                isHorizontal &&
                <DesktopHeaderContainer>
                    <DesktopTechInfo>
                        { title && TechInfo}
                    </DesktopTechInfo>
                    <DesktopFilmTitle>
                        { title?  Title : <LoadingAnimation></LoadingAnimation>}
                    </DesktopFilmTitle>
                    <DesktopOpeningCrawl className="opCrawl">
                        { title && OpeningCrawl}
                    </DesktopOpeningCrawl>
                </DesktopHeaderContainer>
            }
        </React.Fragment>
        
    )
}