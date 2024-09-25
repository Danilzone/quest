import { Link } from "react-router-dom";
import { Header } from "../../../widgets";



export default function Lapshov() {

    return(

        <div className="fullscreen">

            <Header hidden />

            <div className="about-geroi">
                <h2 className="heading">Иван Антонович Лапшов</h2>

                <div className="about-img">
                    <img src={require("../../../shared/assets/Lapshov.png")} alt="avatr"/>
                    <span className="circle-spin"></span>
                </div>


                <div className="about-content">
                    <h3>Cтаршина роты</h3>
                    <p>
                        Cтаршина роты 342-го стрелкового полка 136-й стрелковой дивизии 67-й армии Ленинградского фронта.
                        12 января 1943, во время прорыва блокады Ленинграда, перейдя по льду Неву в районе села Марьино Кировского района Ленинградской области, Лапшов в числе первых ворвался в немецкую траншею, захватил блиндаж, уничтожил несколько солдат и офицеров, ещё 15 - взял в плен.
                        Указом Президиума Верховного Совета СССР за «мужество и героизм, проявленные в боях» гвардии сержант Иван Лапшов был удостоен высокого звания Героя Советского Союза.
                    </p>
                </div>

                <div className="btn-box btns">
                    <Link to="/" className="btn-geroi">Вернуться обратно</Link>
                </div>
            </div>
        </div>
    );

}