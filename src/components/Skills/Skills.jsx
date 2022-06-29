import React from "react";
import s from './Skills.module.css'

export default function Skills(){
    return(
    <div className={s.bg}>
        <div className={s.container}>
        <div className={s.tSkills}>
            <span className={s.tSk}>JavaScript</span>
            <span className={s.tSk}>React</span>
            <span className={s.tSk}>Redux</span>
            <span className={s.tSk}>NodeJs</span>
            <span className={s.tSk}>SQL</span>
            <span className={s.tSk}>Express</span>
            <span className={s.tSk}>Sequelize</span>
            <span className={s.tSk}>DesingTools</span>
            <span className={s.tSk}>Git</span>
            <span className={s.tSk}>TypeScript</span>
            <span className={s.tSk}>Jest</span>
            <span className={s.tSk}>PostgreSQL</span>
            <span className={s.tSk}>HTML</span>
            <span className={s.tSk}>CSS</span>
            <span className={s.tSk}>JavaScript</span>
            <span className={s.tSk}>React</span>
            <span className={s.tSk}>Redux</span>
            <span className={s.tSk}>NodeJs</span>
            <span className={s.tSk}>SQL</span>
            <span className={s.tSk}>Express</span>
            <span className={s.tSk}>Sequelize</span>
            <span className={s.tSk}>ApiRest</span>
        </div>
        <div className={s.col}>
            <div className={s.cols}>
            <h1 className={s.title}>Tech Skills</h1>
            <div className={s.imgCont}>
                <img className={s.img} src={require('../../assets/skills/javascript.png')}/>
                <img className={s.img} src={require('../../assets/skills/react.png')}/>
                <img className={s.img} src={require('../../assets/skills/redux.png')}/>
                <img className={s.img} src={require('../../assets/skills/node.png')}/>
                <img className={s.img} src={require('../../assets/skills/postgresql.png')}/>
                <img className={s.img} src={require('../../assets/skills/express.png')}/>
                <img className={s.img} src={require('../../assets/skills/babel.png')}/>
                <img className={s.img} src={require('../../assets/skills/npm.png')}/>
                <img className={s.img} src={require('../../assets/skills/sequelize.png')}/>
                <img className={s.img} src={require('../../assets/skills/html.png')}/>
                <img className={s.img} src={require('../../assets/skills/css.png')}/>
                <img className={s.img} src={require('../../assets/skills/typescript.png')}/>
            </div>
            </div>
            <div className={s.cols}>
                holis
            </div>
        </div>
        </div>
    </div>
    )
}