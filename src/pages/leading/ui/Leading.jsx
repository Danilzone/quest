import { Button } from "../../../shared";
import {Header} from "../../../widgets";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import project01 from '../../../shared/assets/zvezda.png'

export default function Leading() {

    const testFunc = () => {
        console.log("a");
    }

    return (
        <div className="wrapper ">
            
            <Header />
            
            <div className="fullscreen _bg">

                <section className="home" id="home">
                    
                    <div className="home-content">
                        
                        <h1>Квест "Мы помним!"</h1>
                        <div className="text-animate">
                            <h3>Блокада Ленинграда</h3>
                        </div>
                        <p>Данный квест расскажет о событиях, произошедших в Ленинграде
                            во время Великой Отечественной войны. А после изучения всех материалов
                            участники смогут пройти тест, который покажет их знания о блокаде Ленинграда
                        </p>

                        <div className="btn-box">
                            <a href="#" className="btn">Пройти тест</a>
                        </div>

                        <div className="home-sci">
                            <a href="#"><FaVk/></a>
                            <a href="#"><FaTelegramPlane/></a>
                            <a href="#"><FaGithub/></a>
                        </div>
                   </div>

                </section>
            </div>


            <div className="fullscreen">
                
                <section className="video-report" id="video-report">

                </section>
            </div>
            

        
        </div>
    );
}