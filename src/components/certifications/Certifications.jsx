import React from 'react';
import s from './Certifications.module.css';
import henry from '../../assets/henry_certificate.svg';

export default function Certifications({dark}){
    return(<>
        <div className={dark? s.containerD :s.container}>
            <div className={s.title}>CERTIFICATES</div>
           <img className={s.paper} src={henry} alt='henry'/>
           <div className={s.footer}>
           <div className={s.me}><i class='bx bx-code bx-sm' color='rgba(65, 2, 255, 0.63)'></i><span>Developed  by <b>Camila Zupanovich</b></span><i class='bx bx-code-alt bx-sm'></i></div>
           </div>
        </div></>
    )
}