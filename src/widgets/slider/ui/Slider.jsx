import React from "react"
import Slider from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GalerySoldate } from "../../../entities";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            top: "20%", 
            transform: "translateY(-50%)"
        }}
        onClick={onClick}
      >
        <MdOutlineNavigateNext color="#FF930E"  size={40}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            top: "24%",
            rotate: "180deg",
        }}
        onClick={onClick}
      >
         <MdOutlineNavigateNext color="#FF930E"  size={40} rotate={90}/>
      </div>
    );
  }

export default function SoldateSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

      };
      return (
        <Slider {...settings}>
            
            <div className="slide">
                <GalerySoldate img='Sevastyanov' name="Алексей Севастьянов" description="Вел бой над городом с фашисткими бомбардировщиком. Когда закончились патроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёттроны, направил свой самолёт" />
                <div className="btn-about">
                    <Link to="/quest/Sevastyanov" className="about">Узнать больше</Link>
                </div>
            </div>

            <div className="slide">
                <GalerySoldate img='Makarenkov' name="Григорий Андреевич Заика" description="Во время прорыва блокады Ленинграда, рота Заики " />
                <div className="btn-about">
                    <Link to="/quest/Makarenkov" className="about">Узнать больше</Link>
                </div>
            </div>

            <div className="slide">
                <GalerySoldate img='Tipanov' name="Типанов" description="Вел бой над городом с фашисткими бомбардировщиком. Когда закончились патроны, направил свой самолёт" />
                <div className="btn-about">
                    <Link to="/quest/Tipanov" className="about">Узнать больше</Link>
                </div>
            </div>

            <div className="slide">
                <GalerySoldate img='Zaika' name="Заика Григорий Андреевич" description="Вел бой над городом с фашисткими бомбардировщиком. Когда закончились патроны, направил свой самолёт" />
                <div className="btn-about">
                    <Link to="/quest/Zaika" className="about">Узнать больше</Link>
                </div>
            </div>

            <div className="slide">
                <GalerySoldate img='Lapshov' name="Алексей Севастьянов" description="Вел бой над городом с фашисткими бомбардировщиком. Когда закончились патроны, направил свой самолёт" />
                <div className="btn-about">
                    <Link to="/quest/Lapshov" className="about">Узнать больше</Link>
                </div>
            </div>
{/* 360х385 */}


      </Slider>
    )

}