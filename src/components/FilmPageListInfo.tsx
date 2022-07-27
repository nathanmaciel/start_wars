import React from "react";
import styled from "styled-components";
import { RectangleBox } from "./SharedStyledElements";


// Mobile Styles

const VerticalListsContainer = styled.div`
	background-image: url("data:image/svg+xml,%3Csvg width='309' height='1921' viewBox='0 0 309 1921' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M11 264.966V264.94L10.9974 264.915L0.5 162.567L0.5 5C0.5 2.51477 2.51472 0.5 5 0.5H304C306.485 0.5 308.5 2.51477 308.5 5V162.562L296.004 264.905L296 264.935V264.966V959.905C296 960.34 296.052 960.773 296.154 961.196L308.374 1011.78C308.458 1012.13 308.5 1012.48 308.5 1012.84L308.5 1253.86C308.5 1254.42 308.398 1254.97 308.199 1255.48L296.368 1286.19C296.125 1286.82 296 1287.49 296 1288.17V1401.45C296 1404.48 298.462 1406.95 301.5 1406.95H304C306.485 1406.95 308.5 1408.96 308.5 1411.45V1783.41C308.5 1785.89 306.485 1787.91 304 1787.91H301.5C298.462 1787.91 296 1790.37 296 1793.41V1861.02C296 1864.06 298.462 1866.52 301.5 1866.52H304C306.485 1866.52 308.5 1868.54 308.5 1871.02V1916C308.5 1918.49 306.485 1920.5 304 1920.5H5C2.51472 1920.5 0.5 1918.49 0.5 1916L0.5 1871.02C0.5 1868.54 2.51472 1866.52 5 1866.52H12C15.0376 1866.52 17.5 1864.06 17.5 1861.02V1793.41C17.5 1790.37 15.0376 1787.91 12 1787.91H5C2.51472 1787.91 0.5 1785.89 0.5 1783.41L0.5 1395.62C0.5 1393.14 2.51472 1391.12 5 1391.12H12C15.0376 1391.12 17.5 1388.66 17.5 1385.62L17.5 1288.47C17.5 1287.58 17.2844 1286.7 16.8716 1285.91L1.01413 1255.65C0.676416 1255.01 0.5 1254.29 0.5 1253.56L0.5 1012.75C0.5 1012.45 0.530111 1012.15 0.589882 1011.85L10.8901 961.092C10.9632 960.732 11 960.365 11 959.998L11 264.966Z' 
    fill='%23${({theme}) => theme.backgroundColor}' 
    fill-opacity='${({theme}) => theme.backgroundOpacity}' 
    stroke='%23${({theme}) => theme.borderColor}'
    stroke-width='${({theme}) => parseFloat(theme.borderSize.replace("px", "")) * 1.6}px'/%3E%3C/svg%3E");
    border-top: ${({theme}) => theme.borderSize} solid #${({theme}) => theme.borderColor};
    border-bottom: ${({theme}) => theme.borderSize} solid #${({theme}) => theme.borderColor};
    width: clamp(310px, 60vw, 620px);
    height: max-content;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    margin: 40px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const ListTitleBox = styled(RectangleBox)`
    width: clamp(250px, 50vw, 480px);
    height: 35px;
    margin: 15px 0 5px 0;
`
const ListTitle =  styled.h4`
    font-weight: 300;
    color: #${({theme}) => theme.fontColor};
`
const List = styled.u`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
`
const ListItem = styled.li`
    font-family: ${({theme})=> theme.fontFamily};
    font-size: 12px;
    margin-top: 2px;
    padding: 0;
    list-style: none;
`
const FinalSpace = styled.div`
    height: 10px;
`

// Desktop styles

const HorizontalListsContainer = styled.div`
	background-image: url("data:image/svg+xml,%3Csvg width='1026' height='628' viewBox='0 0 1026 628' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M278.273 0.5C280.758 0.5 282.773 2.51472 282.773 5V13C282.773 16.0376 285.235 18.5 288.273 18.5H316.694C317.508 18.5 318.312 18.3192 319.048 17.9706L355.016 0.933181C355.618 0.647955 356.276 0.5 356.943 0.5H483.833C484.731 0.5 485.608 0.768694 486.352 1.27151L510.452 17.557C511.361 18.1716 512.433 18.5 513.531 18.5H920.929C921.706 18.5 922.473 18.3356 923.182 18.0175L961.319 0.894787C961.898 0.634545 962.527 0.5 963.162 0.5H1021C1023.49 0.5 1025.5 2.51472 1025.5 5V623C1025.5 625.485 1023.49 627.5 1021 627.5H963.728C962.771 627.5 961.838 627.195 961.067 626.629L937.116 609.065C936.172 608.373 935.033 608 933.863 608H507.524C506.096 608 504.724 608.555 503.698 609.549L486.47 626.233C485.631 627.045 484.508 627.5 483.339 627.5H356.964C356.285 627.5 355.615 627.346 355.005 627.051L316.749 608.549C316.002 608.188 315.184 608 314.354 608H279.821C276.784 608 274.321 610.462 274.321 613.5V623C274.321 625.485 272.307 627.5 269.821 627.5H75.8182C73.3329 627.5 71.3182 625.485 71.3182 623V613.5C71.3182 610.462 68.8557 608 65.8182 608H34.3636C31.3261 608 28.8636 610.462 28.8636 613.5V623C28.8636 625.485 26.8489 627.5 24.3636 627.5H5C2.51472 627.5 0.5 625.485 0.5 623V5.00002C0.5 2.51473 2.51472 0.5 5 0.5H24.3636C26.8489 0.5 28.8636 2.51472 28.8636 5V13C28.8636 16.0376 31.3261 18.5 34.3636 18.5H65.8182C68.8558 18.5 71.3182 16.0376 71.3182 13V5C71.3182 2.51472 73.3329 0.5 75.8182 0.5H278.273Z' 
    fill='%23${({theme}) => theme.backgroundColor}' 
    fill-opacity='${({theme}) => theme.backgroundOpacity}' 
    stroke='%23${({theme}) => theme.borderColor}'
    stroke-width='${({theme}) => parseFloat(theme.borderSize.replace("px", "")) * 1.6}px'/%3E%3C/svg%3E");
    margin: 20px 0 40px 0;
    background-size: 100% 100%;
    height: 500px;
    width: clamp(470px, calc(88vw + 20px), 880px);
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const ListsInsideContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const HorizontalListTitle = styled(ListTitleBox)`
    width: clamp(200px, 40vw, 400px);
`


export default function FilmPageListInfo(props: any){

    const {isHorizontal, info} = props

    const [characters, setCharacters] = React.useState<any[]>([])
    const [planets, setPlanets] = React.useState<any[]>([])
    const [starships, setStarships] = React.useState<any[]>([])
    const [vehicles, setVehicles] = React.useState<any[]>([])
    const [species, setSpecies] = React.useState<any[]>([])

    React.useEffect(()=> {
        if(info.length > 1){
            for(let element of info){
                if(element[0].includes("people") && !characters.includes(element[1])){
                    setCharacters((prev) => {
                        return [... prev, element[1]]
                    })
                } else if(element[0].includes("planets") && !planets.includes(element[1])){
                    setPlanets((prev) => {
                        return [... prev, element[1]]
                    })
                } else if(element[0].includes("starships") && !starships.includes(element[1])){
                    setStarships((prev) => {
                        return [... prev, element[1]]
                    })
                } else if(element[0].includes("vehicles") && !vehicles.includes(element[1])){
                    setVehicles((prev) => {
                        return [... prev, element[1]]
                    })
                } else if(element[0].includes("species") && !species.includes(element[1])){
                    setSpecies((prev) => {
                        return [... prev, element[1]]
                    })
                }
                
            }
        }
    },[info])

    const VerticalFeatureList = (title: string, array: string[]) => {
        return (
            <React.Fragment>
                <ListTitleBox>
                <ListTitle>{title}</ListTitle>
                </ListTitleBox>
            <List>
                {array.map((el, index)=> {
                    return(
                        <ListItem key={index}>{el}</ListItem>
                    )
                })}
            </List>
            </React.Fragment>
        )
    }

    const HorizontalFeatureList = (title: string, array: string[]) => {
        return (
            <React.Fragment>
                <HorizontalListTitle>
                    <ListTitle>{title}</ListTitle>
                </HorizontalListTitle>
            <List>
                {array.map((el, index)=> {
                    return(
                        <ListItem key={index}>{el}</ListItem>
                    )
                })}
            </List>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            {
                !isHorizontal &&
                <VerticalListsContainer>
                    {VerticalFeatureList('Characters', characters)}
                    {VerticalFeatureList('Planets', planets)}
                    {VerticalFeatureList('Starships', starships)}
                    {VerticalFeatureList('Vehicles', vehicles)}
                    {VerticalFeatureList('Species', species)}
                    <FinalSpace></FinalSpace>                  
                </VerticalListsContainer>
            }
            {
                isHorizontal &&
                <HorizontalListsContainer>
                    <ListsInsideContainer>
                        {HorizontalFeatureList('Characters', characters)}
                        {HorizontalFeatureList('Planets', planets)}
                    </ListsInsideContainer>
                    <ListsInsideContainer>
                    {HorizontalFeatureList('Starships', starships)}
                        {HorizontalFeatureList('Vehicles', vehicles)}
                        {HorizontalFeatureList('Species', species)} 
                    </ListsInsideContainer>
                </HorizontalListsContainer>
            }
            
        </React.Fragment>
    )
}