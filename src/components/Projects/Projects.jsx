import React,{useState} from 'react';
import s from './Projects.module.css';

const project = [
    {title:"Dog app", subtitle:"An application that helps you find your ideal breed. A site where you can search by keyword, by temperament and even sort by weight and alphabetically. Also you can create a profile for your pet and share it with the dog community", image: require('../../assets/dog_app.png'), id:'dog', url:'http://findog-app.vercel.app', tech:['javascript','react','redux','node','express','sequelize','cssmodules','html5','postgresql']},
    {title:"Finder app", subtitle:"An application that helps you find your ideal dog breed. A site where you can search by keyword, by temperament and even sort by weight and alphabetically. Also you can create a profile for your pet and share it with the dog community", image: require('../../assets/finder_app.png'), id:'finder', url:'http://finder-app-omega.vercel.app', tech:['javascript','react','redux','node','express','sequelize','auth0','cssmodules','html5','mapbox','mui','firebase','postgresql']},
    {title:"Food app", subtitle:"An application that helps you find your ideal dog breed. A site where you can search by keyword, by temperament and even sort by weight and alphabetically. Also you can create a profile for your pet and share it with the dog community", image: require('../../assets/food_app.png'), id:'food', url:'http://letscook-app.vercel.app', tech:['javascript','react','redux','node','express','sequelize','cssmodules','html5','postgresql']},
    {title:"Weather app", subtitle:"An application that helps you find your ideal dog breed. A site where you can search by keyword, by temperament and even sort by weight and alphabetically. Also you can create a profile for your pet and share it with the dog community", image: require('../../assets/weather_app.png'), id:'weather', url:'http://finder-app-omega.vercel.app', tech:['javascript','react','cssmodules','html5']}
]

export default function Projects(){
    
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
        <div className={s.container}>
            <div className={s.headTitle}>PROJECTS</div>
            {currentPage.map(p=>
            <div key={p.id} className={s.divproj}>
                <div className={s.contImg}>
                    <img src={p.image} alt='project' className={s.img}/>
                    <a href={p.url} target='_blank' className={s.link}><span>VISIT APP</span><img width='20px' height='20px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmpJREFUSEull+F12zAMhD9soE4Qb9B2A2WTeIN0k25Qj9ANnBHcCdJukE7APpKQBJKAJb/yR15CkTjicDgyIkAqP3h4HNkWxc/z7TgSze6wkYe9cbARuARtNwynPnw4XeikLcEhJ+BzwP1f4Ga+nUCeDtTqF/Cx7DPA6xFegB93WRPOJC4aJB/yLTqoifNc1mn2huoycwLee6r9zOUMyQUPKlGBdTQ1FpgTXDOwkL4l4baq3Y+2BgLizOveHWDhqv3VLAx7rdXPRJIbpCdnfQvcJTKjGUM6BmyoS1D0sYE20U2NoYpr+67AZeszwptrLD7tK6h+/tOpPaYacDJ2UOxU/d1kWibOwM9O7W3G1i82cWnGRYWOmbQF7Oglg3pqNxln8a6jAMwUcVlgRyZbfRxQuVgzEZhSKZm8QvLaSYEPi0teIKmQVnpLphtHq+QnUmm3324fbzXeydiqt2ZfzcS2VtR/jXNFqlan6eS1S6/BzGLNbngZtDK0U1Tjin4SeDdXtxVSq5b619Kew7rGMgeq/T7WjFt6A9MwviBfIa23WgBc0lvl37GSMTJ9VSi+mSx+NkO66pojBrIrLh9xEJdU4Dp2gIdLotxU8busvST698AscFVNOJfExmXs1Zbv+/TWg6q4fODFuWw7DaqOUaxRGLAKWT+2ifgPAWuZhd7XVN5Wd9NzbcKQ8wX43tTYlMZu1qdPG28LZA/x8IE+NY89p//2H3tLs/T/Bzh9p0vP0F0ew9o6MUHKNAW+0M/fNekbwkf/oGje1VYs0Tv5YYKNydiSGef6r/q5Iusne4SoYs58ROkDPGja/wAbEB00ObzVnAAAAABJRU5ErkJggg=="/></a>
                </div>
                <div className={s.divText}>
                    <p className={s.title}>{p.title}</p>
                    <p className={s.text}>"{p.subtitle}"</p>
                    <hr/>
                    <p className={s.subtitle}>___TECHNOLOGIES___</p>
                    {p.tech?.map(t=><img key={t} alt={t} className={s.tech} src={require(`../../assets/icon/${t}.svg`)}/>)}
               </div>
            </div>)}
            <div className={s.contPoint}>
            {project.map((el,i)=>
                <button className={s.point} key={i} onClick={()=>handleSetPage(i)}></button>)}</div>
            {page>0? <button onClick={(e)=>handlePrev(e)}>/</button>:null}
            {page<project.length-1? <button onClick={(e)=>handleNext(e)}>\</button>:null}
        </div>
    )
}