import React from 'react';
import s from './Certifications.module.css';
import henry from '../../../../assets/henry_certificate.svg';

export default function Certifications({dark}){
    return(<>
        <div className={dark? s.containerD :s.container}>
            <div className={s.title}>CERTIFICATES</div>
           <a className={s.ahref} rel="noreferrer" href='https://certificates.soyhenry.com/cert?id=05659892-1401-4e89-b63c-70139bd4045f' target='_blank'><img className={s.paper} src={henry} alt='henry'/></a>
           <div className={s.footer}>
           <div className={s.me}><i class='bx bx-code bx-sm' color='rgba(65, 2, 255, 0.63)'></i><span>Developed  by <b>Camila Zupanovich</b></span><i class='bx bx-code-alt bx-sm'></i></div>
           </div>
        </div></>
    )
}