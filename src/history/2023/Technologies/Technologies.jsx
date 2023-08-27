import React from "react";
import './Technologies.css'
import { Typography } from "@mui/material";

export default function Technologies({ data, backgroundColorSecondary, backgroundColorPrimary, textColor, fontColor, textOposite }) {
    return (
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',alignItems:'center',padding:'5vw',maxWidth:'704px',gap:'20px' }}>
            {data.technologies.map((e, i) =>
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:'column' }}>
                    <i name={e.name} className={e.icon} style={{ color: textColor, fontSize: '36px' }}></i>
                    <Typography variant="caption" display="block" sx={{ color: textColor }} >{e.name}</Typography>
                </div>)}
        </div>
        </>
    )
}