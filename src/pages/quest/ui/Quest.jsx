import { ButtonQ } from "../../../shared"
import { useState } from "react"


export default function Quest() {
    
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(0);
    

    const goto = (question, bool) => {
        console.log(score);
        setQuestion(question);
        setScore(bool ? score + 1 : score);
    }


    return (
        
        <>

            <div className="fullscreen _quest" style={{
                display: question === 0 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Начать тест?</div>
                       <div className="btns-q">
                           <ButtonQ text="Начать" goto="q1" onClick={() => setQuestion(1)}/>
                           <ButtonQ exit text="Выйти"/>
                       </div>
                   </div>

               </div>

           </div>

           <div className="fullscreen _quest" style={{
                display: question === 1 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Где была организована "Группа первого реагирования" в Ленинграде?</div>
                       <div className="btns-q">
                           <ButtonQ text="На Заячьем острове" goto="q2" onClick={() => goto(2, true)}/>
                           <ButtonQ text="В Смольном"  goto="q2" onClick={() => goto(2, false)} />
                           <ButtonQ text="В Эрмитаже "  goto="q2" onClick={() => goto(2, false)} />
                       </div>
                   </div>

               </div>
           </div>
           <div className="fullscreen _quest" style={{
                display: question === 2 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Сколько человек было поймано в смертельную ловушку при блокаде Ленинграда?</div>
                       <div className="btns-q">
                           <ButtonQ text="1 млн." goto="q3" onClick={() => goto(3, true)}/>
                           <ButtonQ text="2 млн."  goto="q3" onClick={() => goto(3, false)} />
                           <ButtonQ text="500 тыс."  goto="q3" onClick={() => goto(3, false)} />
                       </div>
                   </div>
               </div>
           </div>

           <div className="fullscreen _quest" style={{
                display: question === 3 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Когда начала действовать Дорога жизни на Ладожском озере?</div>
                       <div className="btns-q">
                           <ButtonQ text="Январь 1943" goto="q1" onClick={() => goto(4, false)}/>
                           <ButtonQ text="Ноябрь 1941"  goto="q2" onClick={() => goto(4, true)} />
                           <ButtonQ text="Апрель 1942"  goto="q2" onClick={() => goto(4, false)} />
                       </div>
                   </div>
               </div>
           </div>

           <div className="fullscreen _quest" style={{
                display: question === 4 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Как называлась сборка воспоминаний людей, переживших блокаду Ленинграда?</div>
                       <div className="btns-q">
                           <ButtonQ text="Блокадный дневник" goto="q1" onClick={() => goto(5, false)}/>
                           <ButtonQ text="Блокадная аптека"  goto="q2" onClick={() => goto(5, false)} />
                           <ButtonQ text="Блокадная книга"  goto="q2" onClick={() => goto(5, true)} />
                       </div>
                   </div>
               </div>
           </div>

           <div className="fullscreen _quest" style={{
                display: question === 5 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">В какую дату вступила в действие Дорога жизни на Ладожском озере?</div>
                       <div className="btns-q">
                           <ButtonQ text="24 апреля 1942 года" goto="q1" onClick={() => goto(6, false)}/>
                           <ButtonQ text="12 сентября 1941"  goto="q2" onClick={() => goto(6, true)} />
                           <ButtonQ text="Июль 1941"  goto="q2" onClick={() => goto(6, false)} />
                       </div>
                   </div>
               </div>
           </div>
           <div className="fullscreen _quest" style={{
                display: question === 6 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Когда была полностью освобождена Ленинград от блокады?</div>
                       <div className="btns-q">
                           <ButtonQ text="27 января 1944 г." goto="q1" onClick={() => goto(7, true)}/>
                           <ButtonQ text="Ноябрь 1943"  goto="q2" onClick={() => goto(7, false)} />
                           <ButtonQ text="Январь 1944"  goto="q2" onClick={() => goto(7, false)} />
                       </div>
                   </div>
               </div>
           </div>

           <div className="fullscreen _quest" style={{
                display: question === 7 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Какое увеличение в хлебных пайках было принято в Ленинграде в сентябре 1941 года?</div>
                       <div className="btns-q">
                           <ButtonQ text="На 150 граммов больше"  goto="q2" onClick={() => goto(8, false)} />
                           <ButtonQ text="На 50 граммов больше" goto="q1" onClick={() => goto(8, true)}/>
                           <ButtonQ text="На 23 грамма больше"  goto="q2" onClick={() => goto(8, false)} />
                       </div>
                   </div>
               </div>
           </div>

           <div className="fullscreen _quest" style={{
                display: question === 8 ? "flex" : "none",
            }}>

               <div className="main">

                   <div className="query">
                       <div className="title">Тест окончен!</div>
                       <div className="res">Вы ответили на {score} вопросов из 8</div>
                       <div className="btns-q">
                           <ButtonQ exit text="Завершить" />
                       </div>
                   </div>
               </div>
           </div>


        </>
    )
}