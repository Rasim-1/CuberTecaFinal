import React from 'react'
import s from './Zone.module.scss'
import Card from '../Card/Card'

const Zone = () => {
  return (
   <>
   <div className={s.zone}>
    <div className="container">
        <div className={s.wrapp}>
            <h2>разные зоны <span>с разными условиями</span></h2>
            <div className={s.cards}>
         
              <Card comp={"Игровой ПК и перферия"} name={"Стандарт"} img={"/card1.png"} text={"Общая Зона"} />

              <Card img={"/card2.png"} comp={"Монитор больше + ПК мощнее"} name={"Стандарт+"} text={"Лучшие Места"}  />

              <Card comp={"Подписка PS+ и 2 геймпада"} name={"ПРИСТАВКА"} img={"/card3.png"} text={"Диван + PS5"} />
            
            </div>
        </div>
    </div>
   </div>
   
   
   
   </>
  )
}

export default Zone