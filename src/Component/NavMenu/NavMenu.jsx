import React from 'react'
import s from './NavMenu.module.scss'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
   <>
   <div className={s.wrapp}>
    <nav className={s.menu}>
        <Link to="/">Главная</Link>
        <Link to="/zona">Зона</Link>
        <Link to="/price">Цена</Link>
        <Link to="/images">Фото</Link>
        <Link to="/contact">Контакты</Link>
    </nav>
   
   </div>
   
   
   </>
  )
}

export default NavMenu