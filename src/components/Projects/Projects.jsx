import React,{useState} from 'react';
import s from './Projects.module.css';

const project = [
    {title:"Dog app", subtitle:"An application that helps you find your ideal breed. A site where you can search by keyword, by temperament and even sort by weight and alphabetically. Also you can create a profile for your pet and share it with the dog community", image: require('../../assets/dog_app.png'), id:'dog', url:'http://findog-app.vercel.app', tech:['javascript','react','redux','node','express','sequelize','cssmodules','html5','postgresql']},
    {title:"Finder app", subtitle:"A website for entrepreneurs. With live chats, notifications, geolocation, search filters, online payment, and more. Among the most outstanding features is the support area, the product detail and the account profile", image: require('../../assets/finder_app.png'), id:'finder', url:'http://finder-app-omega.vercel.app', tech:['javascript','react','redux','node','express','sequelize','auth0','cssmodules','html5','mapbox','mui','firebase','postgresql']},
    {title:"Food app", subtitle:"An application that helps you to cook, with instructions, pictures, ingredients, and more. A site where you can search by keyword, by diet and even sort by score and alphabetically, and then you can add to your wish list any that you most like. Also you can submit your recipe and share it.", image: require('../../assets/food_app.png'), id:'food', url:'http://letscook-omega.vercel.app', tech:['javascript','react','redux','node','express','sequelize','cssmodules','html5','postgresql']},
    {title:"Weather app", subtitle:"an application where you can search cities or countries of the world to know the weather in real time. You can add or remove at the home that you dont need any more. ", image: require('../../assets/weather_app.png'), id:'weather', url:'https://weather-app-navy-omega.vercel.app/', tech:['javascript','react','cssmodules','html5']}
]

export default function Projects({dark}){
    
    const [page,setPage] = useState(0);
    const currentPage = project.slice(page,page+1); 

    const handleSetPage =(i)=>{
        setPage(i)
    }
    const handlePrev = (e)=>{
        if(page>0)
        setPage(page-1)
    }
    const handleNext = (e)=>{
        if(page<project.length-1)
        setPage(page +1)
    }
    return(
        <div className={dark? s.containerD :s.container}>
            <div className={s.headTitle}>PROJECTS</div>
            {currentPage.map(p=>
            <div key={p.id} className={s.divproj}>
                <div className={s.contImg}>
                    <img src={p.image} alt='project' className={s.img}/>
                    <a href={p.url} target='_blank' className={dark? s.linkD : s.link}><span>VISIT APP</span>
                    {dark? <i className='bx bx-link-external' style={{color:'#ffffff'}} ></i>:<i className='bx bx-link-external'></i>}</a>
                </div>
                <div className={s.divText}>
                    <p className={s.title}>{p.title}</p>
                    <p  className={dark? s.textD : s.text}>"{p.subtitle}"</p>
                    {dark?  <div className={s.techCont}>{p.tech?.map(t=><img title={t} key={t} alt={t} className={s.tech} src={require(`../../assets/iconD/${t}.svg`)}/>)}</div>
                      :  <div className={s.techCont}>{p.tech?.map(t=><img title={t} key={t} alt={t} className={s.tech} src={require(`../../assets/icon/${t}.svg`)}/>)}</div>}
               </div>
            </div>)}
            {page>0? <button className={s.btnPrev} onClick={(e)=>handlePrev(e)}><i class='bx bxs-chevron-left bx-lg'></i></button>:null}
            {page<project.length-1? <button className={s.btnNext} onClick={(e)=>handleNext(e)}><i class='bx bxs-chevron-right bx-lg'></i></button>:null}
            <div className={s.contPag}>
            {project.map((p,i)=>
            <div className={i===page? s.itemFocus : s.itemPag} onClick={()=>handleSetPage(i)} key={i}></div>)}
            </div>
        </div>
    )
}
