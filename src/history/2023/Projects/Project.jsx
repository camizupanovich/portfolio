import React from "react";
import Limboteams from '../shared/project-svg/limboteams.png';
import FirstAngular from "../shared/project-svg/First.png";
import MirandaFanPage from "../shared/project-svg/miranda.png";
import LetsCook from "../shared/project-svg/letsCook.png";
import WeatherApp from "../shared/project-svg/weather.png";
import RickAndMorty from "../shared/project-svg/rickAndMorty.png";
import FindDog from '../shared/project-svg/findDog.png';
import Finder from '../shared/project-svg/finder.png';
import Ehupi from '../shared/project-svg/ehupi.png';
import SpotiApp from '../shared/project-svg/spotiApp.png';
import './Project.css'
import { Typography } from "@mui/material";
export default function Project({ data,backgroundColorPrimary,  fontColor,textOposite }){
    return(
        <>
        <div style={{ width: '100vw', height: '78vh', backgroundImage: 'url("https://webbtanten.se/wp-content/uploads/2018/12/webbtanten-att-skriva-768x461.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <strong style={{ color: textOposite, fontSize: '86px', paddingLeft: '20px', fontWeight: 'bolder' }}>COFFEE & CODE LOVER</strong>
        </div>
        <div style={{ width: '100vw', padding: '30px 0px', backgroundColor: backgroundColorPrimary }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="overline" display="block" sx={{ color: fontColor, textAlign: 'center', padding: '30px', maxWidth: '600px' }} >{data.about.phrase[1]} </Typography>
                <img src={FirstAngular} alt="Angular First Project" className="imgP"/>
                <img src={MirandaFanPage} alt="Miranda Fan Page" className="imgP"/>
                <img src={Limboteams} alt="Visual clon Limboteams" className="imgP"/>
                <img src={LetsCook} alt="Lets Cook" className="imgP"/>
                <img src={Finder} alt="Find your next job" className="imgP"/>
                <img src={FindDog} alt="Find your Dog Now" className="imgP"/>
                <img src={WeatherApp} alt="Weather App" className="imgP"/>
                <img src={SpotiApp} alt="Spoti App" className="imgP"/>
                <img src={RickAndMorty} alt="Rick and Morty" className="imgP"/>
                <img src={Ehupi} alt="Ehupi" className="imgP"/>
            </div>
        </div>
        </>
    )
}