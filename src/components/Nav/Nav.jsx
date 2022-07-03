import React from "react";
import s from './Nav.module.css';

export default function Nav({dark}){
    
    const darkStyles = {
        color:'white',
        cursor:'pointer',
        margin:'5px',
    }
    const ligthStyles ={
        color:'black',
        cursor:'pointer',
        margin:'5px'
    }
    return(
        <div className={dark? s.sideDark : s.sideBar}>
            <a style={dark? darkStyles: ligthStyles} href='https://github.com/camizupanovich' target='_blank'><i className='bx bxl-github bx-md'></i></a>
            <a style={dark? darkStyles: ligthStyles} href='https://www.linkedin.com/in/camila-antonela-florencia-zupanovich/' target='_blank'><i className='bx bxl-linkedin bx-md' ></i></a>
            <a style={dark? darkStyles: ligthStyles} href='https://wa.me/+541161237441' target='_blank'><i className='bx bxl-whatsapp bx-md' ></i></a>
            <a style={dark? darkStyles: ligthStyles} href="mailto:cami.zupanovich@hotmail.com" target='_blank'><i className='bx bxl-gmail bx-md' ></i></a>
        </div>
    )
}