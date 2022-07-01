import React from "react";
import s from './Avatar.module.css';
import avatar from '../../assets/profile-pic.png'

export default function Avatar(){
    return(
        <div className={s.container}>
            <div className={s.box}>
                    <div className={s.welcome}>Hi! I'm Camila!</div>
                    <div className={s.name}>Full Stack Developer</div>
                <img className={s.avatar} src={avatar} alt='full stack' width='300px'/>
                <div className={s.about}><p className={s.aboutP}>"A young developer from Buenos Aires,Argentina 🇦🇷. As passionate about design and logic, she makes each project unique and innovative where she pours all her creativity and enthusiasm. She defines herself as a full stack developer in constant learning as a symbol of updating in a changing world."</p></div>
                <button>Resume</button>
            </div>
        </div>
    )
}