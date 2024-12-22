import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import s from "./Header.module.scss";

const Header = ({ logo, location, adres, num, bg, color, onScrollToBronya }) => {
  return (
    <>
      <NavMenu />
      <section className={`${s.header} ${bg}`}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.box}>
              <div className={s.box__logo}>
                <img className={s.logo} src={logo} alt="" />
                <h1>
                  <span>КИБЕРТЕКА</span> {location}
                </h1>
              </div>
              <div className={s.map}>
                <p>‣ {adres}</p>
                <p>‣ Работаем круглосуточно!</p>
                <p>‣ {num}</p>
              </div>
              <button
                className={`${s.btn} ${color}`}
                onClick={onScrollToBronya || (() => {})} // Проверка, если обработчик не передан
              >
                Забронировать!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
