import React from 'react'
import s from './Zone.module.scss'

const Zone = () => {
  return (
   <>
   <div className={s.zone}>
    <div className="container">
        <div className={s.wrapp}>
            <h2>разные зоны с разными условиями</h2>
            <div className={s.cards}>
              <div className={s.card}>
                <p>Игровой ПК и переферия</p>
                <h3>Стандарт</h3>
                <img className={s.image} src="/card1.png" alt="" />
                <h4>Общая Зона</h4>
                <a href="">Подробнее → </a>
              </div>

              <div className={s.card }>
                <p>Монитор больше + ПК мощнее</p>
                <h3>Стандарт+</h3>
                <img className={s.image} src="/card2.png" alt="" />
                <h4>Лучшие Места</h4>
                <a href="">Подробнее → </a>
              </div>
              
              <div className={s.card}>
                <p>Подписка PS+ и 2 геймпада</p>
                <h3>ПРИСТАВКА</h3>
                <img className={s.image} src="/card3.png" alt="" />
                <h4>Диван + PS5</h4>
                <a href="">Подробнее → </a>
              </div>
            </div>
        </div>
    </div>
   </div>
   
   
   
   </>
  )
}

export default Zone