import React from 'react'
import s from './Camp.module.scss'
import TarifCamp from '../TarifCamp/TarifCamp'

const Camp = ({text, color}) => {
  return (
    <>
    <div className={s.camp}>
      <div className="container">
        <h1 className={s.wrap}>ЗОНА <span className={color}>{text}</span></h1>
        <p className={s.har}>ХАРАКТЕРИСТИКИ</p>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.box}>

              <p className={s.text1}>процессор</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card1.svg" alt="" />
            </div>

          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>видеокарта</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card2.svg" alt="" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>память</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card3.svg" alt="" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>накопитель</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card4.svg" alt="" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>монитор</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card5.svg" alt="" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>клавиатура</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img className={s.image} src="/card6.svg" alt="" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>мышка</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card7.svg" alt="" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.box}>
              <p className={s.text1}>наушники</p>
              <p className={s.text2}>AMD Ryzen 7 2700X</p>
              <img src="/card8.svg" alt="" />
            </div>
          </div>
        </div>

        <TarifCamp/>
  
        
      </div>
    </div>
  </>
  )
}

export default Camp