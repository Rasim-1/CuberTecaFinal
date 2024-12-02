import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<>
<section className={s.header}>

    <div className="container">
        <div className={s.wrapper}>
        <nav className={s.menu}>
        <Link to="/">Главная</Link>
        <Link to="/zone">Зона</Link>
        <Link to="/price">Цена</Link>
        <Link to="/images">Фото</Link>
        <Link to="/contact">Контакты</Link>
       </nav>

        <div className={s.box}>
        <div className={s.box__logo}>
            <img className={s.logo} src="/logo.png" alt=""  />
            <h1> <span>КИБЕРТЕКА</span> НА ПРОФСОЮЗНОЙ</h1>
        </div>
        <div className={s.map}>
           <ul>
            <li>Профсоюзная улица 22/10к1</li>
            <li>Работаем круглосуточно!</li>
            <li>8 977 320 88 88</li>
           </ul>

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