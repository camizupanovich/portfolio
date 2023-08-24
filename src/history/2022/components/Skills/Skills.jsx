import React from "react";
import { useState } from "react";
import s from './Skills.module.css'

export default function Skills({dark}){
    const [soft,setSoft] = useState(0)
    return(
    <div className={dark? s.bgD : s.bg}>
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
                <img className={s.img} src={require('../../../../assets/skills/javascript.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/react.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/redux.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/node.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/postgresql.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/express.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/babel.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/git.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/sequelize.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/html.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/css.png')}/>
                <img className={s.img} src={require('../../../../assets/skills/typescript.png')}/>
            </div>
            </div>
            <div className={s.cols}>
            <h1 className={s.title}>Soft Skills</h1>
            <div className={s.softCont}>
                <div className={dark? s.divAcD : s.divAc} ><span>Working at teamwork</span> <i onClick={()=>setSoft(1)} class='bx bxs-chevron-down bx-sm' style={dark? {color:'#0091ff',cursor:"pointer"} : {color:'rgb(55, 0, 150)',cursor:'pointer'}}></i></div>
                {soft===1&&<div className={dark? s.acorD : s.acor}>In my first years of professional experience, I had the opportunity to work as a saleswoman in a team with a common goal, at that time I began to <b className={s.b}>like challenges</b>,and understood the importance of good <b className={s.b}>communication</b> to achieve excellent results. In this last time I worked as a full stack developer in a teamwork, with <b className={s.b}>SCRUM as an agile methodology</b>, where I reinforced my skills <b className={s.b}>to learn, explain and work proactively under pressure</b>.</div>}
                <div className={dark? s.divAcD : s.divAc} ><span>Learning new technologies</span> <i onClick={()=>setSoft(2)} class='bx bxs-chevron-down bx-sm' style={dark? {color:'#0091ff',cursor:"pointer"} : {color:'rgb(55, 0, 150)',cursor:'pointer'}}></i></div>
                {soft===2&&<div className={dark? s.acorD : s.acor}>I trained my technological skills in a <b className={s.b}>short time</b>. I had the opportunity to start studying at the SoyHenry bootcamp where in just a <b className={s.b}>few months I learned to make full-stack applications, with clean and orderly code</b>. personally I always guide myself with the <b className={s.b}>official documentation</b>. in my free time I am interested in technological advances among other things</div>}
                <div className={dark? s.divAcD : s.divAc} ><span>Working at design</span> <i onClick={()=>setSoft(3)} class='bx bxs-chevron-down bx-sm'style={dark? {color:'#0091ff',cursor:"pointer"} : {color:'rgb(55, 0, 150)',cursor:'pointer'}}></i></div>
                {soft===3&&<div className={dark? s.acorD : s.acor}>I define myself as a creative person, both in<b className={s.b}> logic and design</b>. I studied architecture at the University of Buenos Aires, learned to manage <b className={s.b}>photoshop programs, color palette, and visual perspective</b>. My creative part also goes through the process, <b className={s.b}>how to solve a problem and how to improve in practice</b> .</div>}
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}