import React from 'react'
import s from './Header.module.scss'
import NavMenu from '../NavMenu/NavMenu'


const Header = ({logo, location, adres, num, bg, color }) => {
  return (
<>
<NavMenu/>

<section className={`${s.header} ${bg}`} >

    <div className="container">
        <div className={s.wrapper}>
            
        <div className={s.box}>
        <div className={s.box__logo}>
            <img className={s.logo} src={logo} alt=""  />
            <h1> <span>КИБЕРТЕКА</span> {location}</h1>
        </div>
        <div className={s.map}>
           
            <p>‣  {adres}</p>
            <p>‣  Работаем круглосуточно!</p>
            <p>‣  {num}</p>
           

        </div>
        <button className={`${s.btn} ${color}`}>Забронировать!</button>
        </div>

        </div>
                
    </div>
    </section>



</>
)
}

export default Header