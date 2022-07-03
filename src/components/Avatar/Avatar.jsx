import React from "react";
import s from './Avatar.module.css';
import avatar from '../../assets/profile-pic.png'
import { useState } from "react";

export default function Avatar(){
    const [about,setAbout]=useState(false)
    return(
        <div className={s.container}>
            <div className={s.box}>
                    <div className={s.welcome}>Hi! I'm Camila!</div>
                    <div className={s.name}>Full Stack Developer</div>
                <img className={s.avatar} src={avatar} alt='full stack' width='200px'/>
                <div>
                    <button className={s.btn} onClick={()=>setAbout(true)}>ABOUT ME</button>
                    <button className={s.btnR}> RESUME  </button>
                </div>
                {about && <div className={s.about}><button onClick={()=>setAbout(false)}>x</button><p className={s.aboutP}>"I am a young developer from Buenos Aires, Argentina.Who as a good lover of logic and design I seek to perform in the user experience as the main basis of any project, write clean code and continue learning new technologies. In my years of professional experience I understood the importance of good customer service, that the visual and marketing are fundamental tools that the product brings and that teamwork is easy to achieve if you have good communication and empathy for the other."</p></div>}
            </div>
        </div>
    )
}