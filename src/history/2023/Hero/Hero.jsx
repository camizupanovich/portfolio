import React from "react";
import { Typography } from "@mui/material";
import img from '../../../assets/profile-pic.png'
export default function Hero({ data,textColor,fontColor,textOposite }){
    return(<div style={{ color: fontColor, padding: '30px', width: '100vw', minHeight: '100vh', backgroundImage: 'url("https://i.imgur.com/3Zb9wO3.png")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Typography variant="h1" display="block" sx={{ color: textColor, maxWidth: '700px', marginTop: '90px' }} >
        {data.hero.title}
    </Typography>
    <Typography variant="h2" display="block" gutterBottom sx={{ color: textOposite, maxWidth: '700px' }} >
       {data.hero.subtitle}
    </Typography>
    <Typography variant="overline" display="block" gutterBottom sx={{ color: fontColor, maxWidth: '700px' }} >
        {data.hero.description}
    </Typography>
    {/* <img style={{position:'absolute',bottom:'0vh',right:'0vw',width:'50vw'}} src={img}/> */}
</div>)

}