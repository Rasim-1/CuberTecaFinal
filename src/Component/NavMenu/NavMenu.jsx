import React from "react";
import s from "./NavMenu.module.scss";
import { NavLink } from "react-router-dom"; // Используем NavLink для активного состояния

const NavMenu = () => {
  return (
    <>
      <div className={s.wrapp}>
        <nav className={s.menu}>
          <NavLink to="/" className={({ isActive }) => (isActive ? s.active : "")}>
            Главная
          </NavLink>
          <NavLink to="/zonaPage" className={({ isActive }) => (isActive ? s.active : "")}>
            Зона
          </NavLink>
          <NavLink to="/pricePage" className={({ isActive }) => (isActive ? s.active : "")}>
            Цена
          </NavLink>
          <NavLink to="/imagesPage" className={({ isActive }) => (isActive ? s.active : "")}>
            Фото
          </NavLink>
          <NavLink to="/contactPage" className={({ isActive }) => (isActive ? s.active : "")}>
            Контакты
          </NavLink>
          <NavLink to="/SaytsPage" className={({ isActive }) => (isActive ? s.active : "")}>
            3D
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavMenu;
