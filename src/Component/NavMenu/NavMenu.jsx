import React from 'react'
import s from './NavMenu.module.scss'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
   <>
   <div className={s.wrapp}>
    <nav className={s.menu}>
        <Link to="/">Главная</Link>
        <Link to="/zonaPage">Зона</Link>
        <Link to="/pricePage">Цена</Link>
        <Link to="/imagesPage">Фото</Link>
        <Link to="/contactPage">Контакты</Link>
        <Link to="/SaytsPage">3D </Link>
    </nav>
   
   </div>
   
   
   </>
  )
}

export default NavMenu