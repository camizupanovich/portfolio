import React from "react";
import Projects from "../Projects/Projects";
import Certifications from "../certifications/Certifications";
import Nav from '../Nav/Nav'
import s from './Landing.module.css';
import Avatar from "../Avatar/Avatar";


export default function Landing(){
    return(
        <>  
            <Nav/>
            <Avatar/>
            <Projects/>
            <Certifications/>
        </>
    )
}