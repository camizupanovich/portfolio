import React from "react";
import './Technologies.css'
import macbook from '../../../assets/dog_app.png'
import types from '../../../assets/Typescript.png'
import { Typography } from "@mui/material";

export default function Technologies({ data, backgroundColorSecondary, backgroundColorPrimary, textColor, fontColor, textOposite }) {
    return (
        <>
            <div className="containerTech">
                <div className="data1">
                    <Typography variant="overline" display="block" sx={{ color: textColor }} >{data.about.phrase[0]}</Typography>
                    <div className="container-tech">
                        {data.technologies.map((e, i) =>
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <i name={e.name} className={e.icon} style={{ color: textColor, fontSize: '36px' }}></i>
                                <Typography variant="caption" display="block" sx={{ color: textColor }} >{e.name}</Typography>
                            </div>)}
                    </div>
                    <Typography variant="overline" display="block" sx={{ color: textColor, mt:2 }} >{data.about.phrase[1]}</Typography>
                    <div className="responsive-img">
                        <img src={macbook} alt="macbook" className="macbook"/>
                        <Typography variant="overline" display="block" sx={{ color: textColor, mt:2 }} >{data.about.phrase[2]} <br/>{data.about.phrase[3]}</Typography>
                    </div>
                    {/* <Typography variant="overline" display="block" sx={{ color: fontColor, mt:2 }} ></Typography> */}
                </div>
            </div>
            <div></div>
            <div style={{ padding:'7vh 10vw', backgroundColor:backgroundColorPrimary}}>
            <Typography variant="overline" display="block" sx={{ color: fontColor}} >{data.about.phrase[4]}</Typography>
            </div>
        </>
    )
}