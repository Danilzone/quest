import { Link } from "react-router-dom";
import { Header } from "../../../widgets";



export default function Zaika() {

    return(

        <div className="fullscreen">

            <Header hidden />

            <div className="about-geroi">
                <h2 className="heading">Григорий Андреевич Заика</h2>

                <div className="about-img">
                    <img src={require("../../../shared/assets/Zaika.png")} alt="avatr"/>
                    <span className="circle-spin"></span>
                </div>


                <div className="about-content">
                    <h3>Подполковник Советской Армии</h3>
                    <p>
                        Вовремя прорыва блокады Ленинграда рота Заики в течение семи дней беспрерывно вела бои, 
                        отбивмассированные контратаки пехотныхи танковыхчастей противника. 19 января 1943 года рота 
                        захватила укреплённые позиции противника и вышли кшоссейной дороre Синявино-8-я ГЭС. Заика лично 
                        участвовал во всех боях, уничтожив вражеских солдат и офицеров, был четырераза ранен, но продолжалсражаться.
                        За «образцовоевыполнение боевых заданий командования на фронтеборьбыс немецкими захватчиками и проявленные 
                        при этом мужество и героизм» старший лейтенант Григорий Заика был удостоен высокого звания 
                        Героя Советского Союзас вручением орденаЛенина и медали «Золотая Звезда»
                    </p>
                </div>

                <div className="btn-box btns">
                    <Link to="/" className="btn-geroi">Вернуться обратно</Link>
                </div>
            </div>
        </div>
    );

}