import React from 'react';
import s from './Certifications.module.css';
import henry from '../../assets/henry_certificate.svg';

export default function Certifications({dark}){
    return(<>
        <div className={dark? s.containerD :s.container}>
            <div className={s.title}>CERTIFICATIONS</div>
           <img className={s.paper} src={henry} alt='henry'/>
           <form>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
           </form>
        </div></>
    )
}