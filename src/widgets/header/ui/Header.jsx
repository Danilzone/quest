import { useState } from "react";
import { Link } from "react-router-dom";



export default function Header({hidden}) {
    
    const [active, setActive] = useState('Главная');

    const addActive = (navtext) => {
        setActive(navtext);
    }

    return(

        <div className="header">
            
            <div className="logo">
                <Link className="logo-text" to="/">ДПК</Link>
            </div>

            <div style={{display: hidden ? 'none' : ''}} className={`navigation `}>

                <a href="#home" className={`navtext ${active === 'Главная' ? '_navactive' : ' '} `}          onClick={() => addActive('Главная')}  >Главная</a>
                <a href="#video-report" className={`navtext ${active === 'Видео репортаж' ? '_navactive' : ' '} `} onClick={() => addActive('Видео репортаж')}  >Видео репортаж</a>
                <a href="#galery" className={`navtext ${active === 'Галерея' ? '_navactive' : ' '} `}        onClick={() => addActive('Галерея')}  >Галерея</a>
                <a href="#type" className={`navtext ${active === 'Лента времени' ? '_navactive' : ' '} `}       onClick={() => addActive('Лента времени')}  >Лента времени</a>
                <a href="#chronicle" className={`navtext ${active === 'Летопись' ? '_navactive' : ' '} `}              onClick={() => addActive('Летопись')}  >Летопись</a>
                <a href="#audiogid" className={`navtext ${active === 'Аудиогид' ? '_navactive' : ' '} `}             onClick={() => addActive('Аудиогид')}  >Аудиогид</a>

            </div>



        </div>

    );

}