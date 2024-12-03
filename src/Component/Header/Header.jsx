import React from 'react'
import s from './Header.module.scss'


const Header = () => {
  return (
<>
<section className={s.header}>

    <div className="container">
        <div className={s.wrapper}>
            
        <div className={s.box}>
        <div className={s.box__logo}>
            <img className={s.logo} src="/logo.png" alt=""  />
            <h1> <span>КИБЕРТЕКА</span> НА ПРОФСОЮЗНОЙ</h1>
        </div>
        <div className={s.map}>
           
            <p>‣  Профсоюзная улица 22/10к1</p>
            <p>‣  Работаем круглосуточно!</p>
            <p>‣  8 977 320 88 88</p>
           

        </div>
        <button className={s.btn}>Забронировать!</button>
        </div>

        </div>
                
    </div>
    </section>



</>
)
}

export default Header