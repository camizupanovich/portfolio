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
            <a href='#1' className={s.item}>Skills</a>
            <a href='#2' className={s.item}>\Projects</a>
            <a href='#3' className={s.item}>\Certificate</a>
        </div>
            <Nav/>
            <section><Avatar/></section>
            <section id='1'><Skills/></section>
            <section id='2'><Projects/></section>
            <section id='3'><Certifications/></section>
        </>
    )
}