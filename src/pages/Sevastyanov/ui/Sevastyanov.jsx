import { Link } from "react-router-dom";
import { Header } from "../../../widgets";



export default function Sevastyanov() {

    return(

        <div className="fullscreen">

            <Header hidden />

            <div className="about-geroi">
                <h2 className="heading">Алексей Севастьянов</h2>

                <div className="about-img">
                    <img src={require("../../../shared/assets/Sevastyanov.png")} alt="avatr"/>
                    <span className="circle-spin"></span>
                </div>


                <div className="about-content">
                    <h3>Летчик</h3>
                    <p>
                        Вел бой над городом с фашистским бомбардировщиком. Когда закончились патроны, направил свой самолёт на врага и мотором ударил фашистский самолет.
                        Тут вспыхнул и полетел в низ. Самолёт противника рухнул.
                        Алексей Тихонович Севастьянов 23 апреля 1942 года во время выполнения задания по защите Дороги жизни.
                    </p>
                </div>

                <div className="btn-box btns">
                    <Link to="/" className="btn-geroi">Вернуться обратно</Link>
                </div>
            </div>
        </div>
    );

}