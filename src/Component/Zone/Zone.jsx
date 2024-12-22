import React, { useEffect } from 'react'
import s from './Zone.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Card from '../Card/Card'
import Ps5 from '../Ps5/Ps5';

const Zone = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,     
    });
  }, []);
  return (
   <>
   <div className={s.zone}>
    <div className="container">
        <div className={s.wrapp}>
            <h2>разные зоны <span>с разными условиями</span></h2>
            <div className={s.cards} data-aos="zoom-in-down" 
          data-aos-delay="200">
              
              <Card comp={"Игровой ПК и перферия"} name={"Стандарт"} img={"/card1.png"} text={"Общая Зона"} />
         
              <Card img={"/card2.png"} comp={"Монитор больше + ПК мощнее"} name={"Стандарт+"} text={"Лучшие Места"}   href={'ZonaSinglePage/1'}/>

              <Card comp={"Подписка PS+ и 2 геймпада"} name={"ПРИСТАВКА"} img={"/card3.png"} text={"Диван + PS5"} />
             
            

            
            </div>
        </div>
    </div>
   </div>
   
   
   
   </>
  )
}

export default Zone