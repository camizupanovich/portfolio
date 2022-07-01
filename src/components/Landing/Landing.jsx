import React from "react";
import Projects from "../Projects/Projects";
import Certifications from "../certifications/Certifications";
import Skills from "../Skills/Skills";
import Nav from '../Nav/Nav'
import s from './Landing.module.css';
import Avatar from "../Avatar/Avatar";


export default function Landing(){
    return(
        <>  
        <div className={s.appBar}>
            <a href='#skills' className={s.item}>Skills</a>
            <a href='#projects' className={s.item}>Projects</a>
            <a href='#certifications' className={s.item}>Certificate</a>
        </div>
            <Nav/>
            <section><Avatar/></section>
            <section id='skills'><Skills/></section>
            <section id='projects'><Projects/></section>
            <section id='certifications'><Certifications/></section>
        </>
    )
}