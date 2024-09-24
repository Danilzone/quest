import { Button } from "../../../shared";
import { useEffect, useState } from "react";
import {Header, SoldateSlider} from "../../../widgets";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiSolidSkipNextCircle } from "react-icons/bi";


export default function Leading() {

    const [video, setVideo] = useState(false);

    const [backgroundImage, setBackgroundImage] = useState('001');
  
    useEffect(() => {
      const imageList = ['001', '002', '003', '004', '005', '006', '007', '008']; // список изображений, которые вы хотите использовать
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        setBackgroundImage(imageList[currentIndex]);
        currentIndex = (currentIndex + 1) % imageList.length;
      }, 3000);
      
      return () => clearInterval(interval);
    }, []);


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


            <div className={`fullscreen bg-${backgroundImage}`}>
                <div className="bluer_black">

                    <div className="offer" id="video-report">

                        <div className="offer-text">
                            Узнать больше про
                            <div className="_text">Блокаду&nbsp;<p className="_text-orange">Ленинграда</p></div>
                            <br/>

                        </div>
                        
                        <Button 
                            icon={<BiSolidSkipNextCircle className="icon-send-video" color="#FF930E" size={36}/>}
                            color="none"
                            borderColor="orange"
                            textColor="orange"
                            text="Посмотреть видео" 
                            hoverOrange
                            to="video-report"
                        />

                    </div>

                </div>
            </div>


            <div className="fullscreen _bg2">
                <div className="blur">
                </div>
                <div className="slider-main"  id="galery">
                    <SoldateSlider />

                    <div className="super-text">
                        Никто не забыт
                        <p>Ничто не забыто</p>
                    </div>

                </div>
            </div>

            <div className="fullscreen RED">

            </div>
        
        </div>
    );
}