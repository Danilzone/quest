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
                <div className="slider-main" id="galery">
                    <SoldateSlider />

                    <div className="super-text">
                        Никто не забыт
                        <p>Ничто не забыто</p>
                    </div>

                </div>
            </div>

            <div className="type" id="type">
                <h2 className="heading">Лента времени</h2>

                <div className="type-row">
                    <div className="type-columne">
                        <h1 className="title">Начало Блокада Ленинграда</h1>

                        <div className="type-box">
                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>Июнь 1941</h2></div>
                                    <h3>Группы первого реагирования</h3>
                                    <p>
                                        В пятницу Совет депутатов администрации Ленинграда организовал 
                                        "Группы первого реагирования" из гражданских лиц. В следующие дни 
                                        гражданское население Ленинграда было проинформировано об опасности, 
                                        и более миллиона граждан были мобилизованы на строительство 
                                        укреплений. По периметру города было построено несколько линий 
                                        обороны для отражения враждебных сил, приближающихся с севера и юга, 
                                        посредством сопротивления гражданского населения
                                    </p>
                                </div>
                            </div>

                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>Сентябрь 1941</h2></div>
                                    <h3>Понедельник</h3>
                                    <p>
                                        Понедельник. В этот роковой день Ленинград оказался отрезанным от внешнего мира, 
                                        а 2 миллиона и 544 тысячи ленинградцев были пойманы в смертельную ловушку. Шлиссельбург пал.
                                        Словно спичка, вспыхнули деревянные здания Бадаевских складов, где хранились стратегические запасы сахара и муки 
                                        – несколько тысяч тонн продуктов. Еще долгое время ленинградцы будут приходить на пожарище, чтобы собрать землю, 
                                        впитавшую сладкий сироп расплавившегося сахара.
                                    </p>
                                </div>
                            </div>

                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>Ноябрь 1941</h2></div>
                                    <h3>Хлебные пайки</h3>
                                    <p>
                                        В Смольном решили увеличить хлебные пайки. Рабочим стали ежедневно давать 350 граммов 
                                        (на 100 граммов больше старой нормы), а иждивенцам и детям – 200 граммов (что на 75 граммов превышало прежние цифры).
                                        Далее норма снижалась 3 раза.
                                    </p>
                                </div>
                            </div>
                         
                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>16 ноября 1941 года - 24 апреля 1942 года</h2></div>
                                    <h3>Дорога жизни</h3>
                                    <p>
                                        На Ладожском озере стала действовать Дорога жизни. Сначала – как конно-санный путь, а позднее, 
                                        по мере укрепления ледяного покрова – как автомобильная трасса.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="type-columne">
                        <h1 className="title">Блокада Ленинграда</h1>

                        <div className="type-box">   
                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>Август 1942</h2></div>
                                    <h3>Симфония № 7</h3>
                                    <p>
                                        Симфония № 7 "Ленинград" Дмитрия Шостаковича была исполнена оркестром Ленинградского радио. 
                                        Концерт транслировался по громкоговорителям, установленным по всему городу, а также направленным в сторону линии фронта.
                                    </p>
                                </div>
                            </div>

                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>Январь 1943</h2></div>
                                    <h3>Кольцо было прорвано</h3>
                                    <p>
                                    Блокадное кольцо было прорвано силами Красной армии.
                                    </p>
                                </div>
                            </div>

                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>14 января 1944</h2></div>
                                    <h3>Январский гром</h3>
                                    <p>
                                        Начало операции «Январский гром», в ходе которой врага окончательно отогнали от Ленинграда.
                                    </p>
                                </div>
                            </div>

                            <div className="type-content">
                                <div className="content">
                                    <div className="year"><h2>Январь 1944</h2></div>
                                    <h3>Салют победы</h3>
                                    <p>
                                        В ходе операции "Январский гром", Ленинград был полностью освобожден. 
                                        А вечером в Ленинграде прозвучал салют победы. 324 орудия выстрелили 24 раза.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fullscreen" id="chronicle">
                <div className="chronicle">
                    <h2 className="heading" >Летопись</h2>
                    
                        <div className="chronicle-blocks">

                            <div className="chronicle-block">
                                <div className="title">
                                <b className="orange">▎</b>Блокадная книга
                                </div>
                                <div className="description">
                                <b>Описание:</b><br />
                                    Сборник воспоминаний, составленный из рассказов людей, переживших блокаду Ленинграда. Эта книга представляет собой мощный документ эпохи, в котором отражены не только факты, но и глубокие человеческие эмоции. Гранин и Ларионова собирали свидетельства, чтобы сохранить память о страданиях и героизме жителей города. Каждое воспоминание — это отдельная история о мужестве, любви и стойкости в условиях невыносимых лишений. Читатель погружается в атмосферу блокады, ощущая холод, голод и страх, но также и надежду на победу.
                                </div>
                            </div>
                   
                            <div className="chronicle-block">
                                <div className="title">
                                <b className="orange">▎</b><p className="_middle">"Завтра была война" — Борис Васильев</p>
                                </div>
                                <div className="description">
                                <b>Описание:</b><br />
                                    Роман, рассказывающий о молодежи, живущей в условиях блокады. Главные герои — подростки, которые сталкиваются с реалиями войны, мечтая о будущем и свободе. Через призму их жизни Васильев показывает, как война меняет судьбы и разрушает мечты. Молодежь стремится сохранить свою человечность и надежду, несмотря на ужасные условия блокады. Книга затрагивает темы дружбы, любви и потерь, подчеркивая, что даже в самые трудные времена остается место для человечности и мечты о мире.
                                </div>
                            </div>


                        </div>

                    <div className="about-chronicle">
                        <div className="title">—</div>
                        <p>
                            Эти произведения являются важными свидетельствами о ленинградской блокаде, сохраняя память о трагедии и героизме людей, которые пережили эти страшные годы. Они помогают современным читателям понять масштабы страданий и стойкости, проявленных жителями города в условиях войны.
                        </p>
                        <div className="title">&nbsp;</div>

                    </div>
                </div>
            </div>

            <div className="fullscreen">
                <div className="center-video" id="audiogid">
                <h2 className="heading">Аудиогид</h2>

                    <iframe
                        width="720"
                        height="405"
                        src="https://rutube.ru/play/embed/63e9569bec870343b22366e8c6f5da44"
                        frameBorder="0"
                        allow="clipboard-write; autoplay"
                        webkitAllowFullScreen
                        mozallowfullscreen
                        allowFullScreen
                    ></iframe>
                    

                </div>
            </div>


        </div>
    );
}