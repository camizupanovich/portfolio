import React, { useState } from "react";
import './Services.css';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import colors from "../helpers/colors";

export default function Services({ data, backgroundColorPrimary, textColor }) {
    const [turned, setTurned] = useState(false);
    const [tooltipOn, setTooltipOn] = useState(false);
    const [actualEl, setActualEl] = useState({ name: 'TAP SCREEN', icon: false, description: false });

    const getTech = (tech, e) => {
        setTooltipOn(true);
        setActualEl(tech);
        console.log(tech, e)
        const elem = document.getElementById(e);
        const rect = elem.getBoundingClientRect()
    };

    const turnTabletOn = () => {
        setActualEl({ name: 'TAP SCREEN' });
        setTurned(!turned);
        const tablet = document.getElementById('tablet');
        if (!turned) {
            tablet.classList.add('perspective');
        } else {
            tablet.classList.remove('perspective');
        }
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', paddingBottom: '8vh', justifyContent: 'center', alignItems: 'end' }}>
            <div className="screen" id="tablet">
                <div className="img">
                    {turned && data?.services?.map((e, index) => (
                        <button className="grid screenOn" key={index} id={`grid-${index}`} onClick={() => getTech(e, `grid-${index}`)}><WidgetsRoundedIcon style={{ color: 'rgb(28, 28, 28)', opacity: 0.4, fontSize: '56px' }} /></button>
                    ))}{/* <small style={{ textAlign: 'center' }}>{e.icon}</small> */}
                </div>
                <button onClick={turnTabletOn} id="turnedBtn" className="button"></button>
            </div>
            <div className="tooltip" id="tooltip">{turned && actualEl.name !== 'TAP SCREEN' ? <span className="tooltipTitle" style={{ color: textColor }}>{actualEl.name}</span> : <span style={{ color: backgroundColorPrimary, fontSize: '80px' }}>{!turned ? 'TURN ON !' : 'TAP SCREEN'}</span>}
                <div style={{ color: backgroundColorPrimary, fontSize: '18px', padding: '0px 5vw',maxWidth:'800px' }}>{actualEl.description}
                </div>
            </div>
        </div>
    );
}