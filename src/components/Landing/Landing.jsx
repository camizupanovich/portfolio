import React from "react";
import Projects from "../Projects/Projects";
import Certifications from "../certifications/Certifications";
import Skills from "../Skills/Skills";
import Nav from '../Nav/Nav'
import s from './Landing.module.css';
import Avatar from "../Avatar/Avatar";
import { useState } from "react";


export default function Landing(){
    const [modal,setModal]=useState(false);
    const [dark,setDark]=useState(false);
    const darkStyles = {
        backgroundColor:'rgb(14,11,21)',
        color:'white',
        cursor:'pointer',
    }
    const ligthStyles ={
        backgroundColor:'white',
        color:'black',
        cursor:'pointer'
    }
    return(
        <> 
        <div  style={dark? darkStyles: ligthStyles}  className={s.appBar}>
            <a href='#home'><img src={dark? require('../../assets/logo_D.png'): require('../../assets/logo_W.png') } width='30px' alt='camila'/></a>
            <div>
            <a href='#skills' style={dark? darkStyles: ligthStyles} className={s.item}>Skills</a>
            <a href='#projects' style={dark? darkStyles: ligthStyles} className={s.item}>Projects</a>
            <a href='#certifications' style={dark? darkStyles: ligthStyles} className={s.item}>Certificate</a></div>
            <div>
            {dark? 
            <i onClick={()=>setDark(false)} className='bx bxs-sun bx-md' style={{color:'#ffffff'}} ></i>:
            <i onClick={()=>setDark(true)} className='bx bxs-moon bx-md'></i> }
            </div>
        </div>
        <div style={dark? darkStyles: ligthStyles}  className={s.bar}>
            <i onClick={()=>setModal(true)} className='bx bx-menu bx-md' ></i>
            <div className={s.row}>
            <a style={dark? darkStyles: ligthStyles}  href='https://github.com/camizupanovich' target='_blank'><i className='bx bxl-github bx-sm'></i></a>
            <a style={dark? darkStyles: ligthStyles} href='https://www.linkedin.com/in/camila-antonela-florencia-zupanovich/' target='_blank'><i className='bx bxl-linkedin bx-sm' ></i></a>
            <a style={dark? darkStyles: ligthStyles}  href='https://wa.me/+541161237441' target='_blank'><i className='bx bxl-whatsapp bx-sm' ></i></a>
            <a style={dark? darkStyles: ligthStyles}  href="mailto:cami.zupanovich@hotmail.com" target='_blank'><i className='bx bxl-gmail bx-sm' ></i></a>
            </div>
            {dark? 
            <i onClick={()=>setDark(false)}className='bx bxs-sun  bx-xs' style={{color:'#ffffff'}} ></i> :
            <i onClick={()=>setDark(true)} className='bx bxs-moon  bx-xs'></i> }
        </div>
            <Nav dark={dark}/>
            {modal && 
            <div style={dark? darkStyles: ligthStyles} className={s.modal}>
            <div onClick={()=>setModal(false)}><i class='bx bx-x-circle bx-sm'></i></div>
            <a onClick={()=>setModal(false)} href='#skills' style={dark? darkStyles: ligthStyles} className={s.modalitem}>SKILLS</a>
            <a onClick={()=>setModal(false)} href='#projects' style={dark? darkStyles: ligthStyles} className={s.modalitem}>PROJECTS</a>
            <a onClick={()=>setModal(false)} href='#certifications' style={dark? darkStyles: ligthStyles} className={s.modalitem}>CERTIFICATIONS</a>
            </div>}
            <section id='home'><Avatar/></section>
            <section id='skills'><Skills dark={dark}/></section>
            <section id='projects'><Projects dark={dark}/></section>
            <section id='certifications'><Certifications dark={dark}/></section>
        </>
    )
}