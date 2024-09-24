import { useState } from "react";



export default function Header() {
    
    const [active, setActive] = useState('Главная');

    const addActive = (navtext) => {
        setActive(navtext);
    }

    return(

        <div className="header">
            
            <div className="logo">
                <div>
                    ДПК
                </div>
            </div>

            <div className="navigation">

                <a href="#" className={`navtext ${active === 'Главная' ? '_navactive' : ' '} `}         onClick={() => addActive('Главная')}  >Главная</a>
                <a href="#" className={`navtext ${active === 'Летопись' ? '_navactive' : ' '} `}        onClick={() => addActive('Летопись')}  >Летопись</a>
                <a href="#" className={`navtext ${active === 'Лентавремени' ? '_navactive' : ' '} `}   onClick={() => addActive('Лентавремени')}  >Лента времени</a>
                <a href="#" className={`navtext ${active === 'Видеорепортаж' ? '_navactive' : ' '} `}  onClick={() => addActive('Видеорепортаж')}  >Видео репортаж</a>
                <a href="#" className={`navtext ${active === 'Галерея' ? '_navactive' : ' '} `}         onClick={() => addActive('Галерея')}  >Галерея</a>
                <a href="#" className={`navtext ${active === 'Аудиогид' ? '_navactive' : ' '} `}        onClick={() => addActive('Аудиогид')}  >Аудиогид</a>

            </div>



        </div>

    );

}