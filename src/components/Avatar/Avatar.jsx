import React from "react";
import s from './Avatar.module.css';
import avatar from '../../assets/profile-pic.png'

export default function Avatar(){
    return(
        <div className={s.container}>
            <div className={s.box}>
                <img src={avatar} alt='full stack' width='300px'/>
                <h2 className={s.welcome}>Hi! I'm Camila Zupanovich!</h2>
            </div>
        </div>
    )
}