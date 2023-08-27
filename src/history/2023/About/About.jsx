import React from "react";
import colors from "../helpers/colors";
import './About.css'
import Technologies from "../Technologies/Technologies";

export default function About({ data, backgroundColorSecondary, backgroundColorPrimary, textColor, fontColor, textOposite }) {
    return (
        <>
            <Technologies backgroundColorSecondary={backgroundColorSecondary} backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} fontColor={fontColor} textOposite={textOposite} data={data} />
            <div style={{ width: '100vw', height: '78vh', backgroundImage: 'url("https://www.lux-review.com/wp-content/uploads/2019/09/pet.jpg")', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', display: 'flex', backgroundPosition: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <strong style={{ color: textColor, fontSize: '72px', paddingRight: '20px', fontWeight: 'bolder' }}>PET FRIENDLY</strong>
            </div>
            <div style={{ width: '100vw', height: '78vh', backgroundSize:'cointain' ,backgroundImage: 'url("/assets/team-desktop.png")', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <strong style={{ color: textOposite, fontSize: '86px', paddingLeft: '20px', fontWeight: 'bolder', cursor: 'pointer' }}>TEAM PLAYER</strong>
            </div>
            <div style={{ backgroundColor: colors.text.dark, display: "flex", flexWrap: 'wrap', width: '100vw', justifyContent: 'center', alignItems: 'center', padding: '5vh 10vw', position: 'relative' }}>
                {data.recommendations.map((e, i) =>
                    <figure className="snip1157" key={i}>
                        <blockquote>{e.content}
                            <div className="arrow"></div>
                        </blockquote>
                        <img src={e.avatar} alt="sq-sample3" />
                        <div className="author">
                            <h5>{e.author}<span>{e.description}</span></h5>
                        </div>
                    </figure>
                )}
            </div>
        </>
    )
}