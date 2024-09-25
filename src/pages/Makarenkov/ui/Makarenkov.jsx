import { Link } from "react-router-dom";
import { Header } from "../../../widgets";



export default function Makarenkov() {

    return(

        <div className="fullscreen">

            <Header hidden />

            <div className="about-geroi">
                <h2 className="heading">Макаренков Иван Михайлович</h2>

                <div className="about-img">
                    <img src={require("../../../shared/assets/Makarenkov.png")} alt="avatr"/>
                    <span className="circle-spin"></span>
                </div>


                <div className="about-content">
                    <h3>Танкист</h3>
                    <p>
                        Механик - водитель танка «Малютка». В начале войны участвовал в боевых действиях на Юго - Западном фронте. 
                        После лечения по ранению направлен на Ленинградский фронт, участник прорыва блокады Ленинграда. 
                        Экипаж танка, в котором И. М. Макаренков был механиком- водителем, за время боёв по прорыву блокады уничтожил до 
                        500 солдат и офицеров противника, 11 орудий и 9 пулемётных точек. О подвигах танкиста Макаренкова можно прочесть во многих книгах по истории танковых сражений
                    </p>
                </div>

                <div className="btn-box btns">
                    <Link to="/" className="btn-geroi">Вернуться обратно</Link>
                </div>
            </div>
        </div>
    );

}