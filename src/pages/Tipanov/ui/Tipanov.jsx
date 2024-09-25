import { Link } from "react-router-dom";
import { Header } from "../../../widgets";



export default function Tipanov() {

    return(

        <div className="fullscreen">

            <Header hidden />

            <div className="about-geroi">
                <h2 className="heading">Типанов Александр Федорович</h2>

                <div className="about-img">
                    <img src={require("../../../shared/assets/Tipanov.png")} alt="avatr"/>
                    <span className="circle-spin"></span>
                </div>


                <div className="about-content">
                    <h3>Пулеметчик</h3>
                    <p>
                        Родился в селе Устье Сасовского . Совершил подвиг при прорыве блокады Ленинграда. 
                        Он закрыл пулемет вражеского дзота своим телом. В феврале 1944 года ему посмертно 
                        присвоили звание Героя Советского Союза. Его именем названы улицы в Санкт-Петербурге, Красном Селе, Рязани.
                    </p>
                </div>

                <div className="btn-box btns">
                    <Link to="/" className="btn-geroi">Вернуться обратно</Link>
                </div>
            </div>
        </div>
    );

}