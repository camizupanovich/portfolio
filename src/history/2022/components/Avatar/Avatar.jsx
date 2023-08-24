import React from "react";
import s from './Avatar.module.css';
import avatar from '../../../../assets/profile-pic.png'
import { useState } from "react";

export default function Avatar(){
    const [about,setAbout]=useState(false)
    const [cv,setCv]=useState(false)
    return(
        <div className={s.container}>
            <div className={s.box}>
                    <div className={s.welcome}>Hi! I'm Camila!</div>
                    <div className={s.name}>Full Stack Developer</div>
                <img className={s.avatar} src={avatar} alt='full stack' width='200px'/>
                <div>
                    <button className={s.btn} onClick={()=>setAbout(!about)}>About me  <i class='bx bxs-user-circle bx-sm' style={{color:'#ffffff'}}></i></button>
                    <button className={s.btnR}  onClick={()=>{setCv(!cv)}}> Download CV <i class='bx bxs-cloud-download bx-sm' style={{color:'#ffffff'}}  ></i> </button>
                </div>
                {cv? <div className={s.language}>
                        <a href="https://drive.google.com/file/d/1HmJoCKRt63SUigzNQbfwsyibZqpRPUS2/view?usp=sharing" download='cv' target='_blank'>
                        <img className={s.imgL} src='https://livedoor.blogimg.jp/ilovespain/imgs/1/3/13f7ed1d.png' alt='spanish'  height='20px'/></a>
                        <a href="https://drive.google.com/file/d/15YJxVAqwiF_sUms_Osxx9nMff96tBFLr/view?usp=sharing" target='_blank' download='cv'>
                        <img className={s.imgL} src='https://latelierplurilingue.files.wordpress.com/2019/01/union-jack-1027898_640.jpg?w=600' height='20px' alt='english'/>
                        </a>
                    </div>
                :null}
                {about && <div className={s.about}><p className={s.aboutP}>"I am a young developer from Buenos Aires, Argentina.Who as a good lover of logic and design I seek to perform in the user experience as the main basis of any project, write clean code and continue learning new technologies. In my years of professional experience I understood the importance of good customer service, that the visual and marketing are fundamental tools that the product brings and that teamwork is easy to achieve if you have good communication and empathy for the other."</p></div>}
            </div>
        </div>
    )
}