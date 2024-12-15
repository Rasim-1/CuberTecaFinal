import React from "react";
import s from "./Ps5.module.scss";
import TarifCard from "../TarifCard/TarifCard";
const Ps5 = ({ text, color}) => {
  return (
    <>
      <div className={s.ps5}>
        <div className="container">
          <h1 className={s.wrap}>ЗОНА <span className={color}>{text}</span></h1>
          <p className={s.title}>ТАРИФЫ И ЦЕНЫ</p>
          <div className={s.cards}>
            <TarifCard
              tarif={"Тариф «1 Час»"}
              accessTf={"Доступен 24/7"}
              img={"/tarif1.svg"}
              oldprice={"Стандартный тариф"}
              price={"140 ₽"}
              border={"border"}
            />
            <TarifCard
              tarif={"Тариф «3 Часа»"}
              accessTf={"Доступен 24/7"}
              img={"/tarif2.svg"}
              oldprice={"Выгода: Час = 130 ₽ "}
              price={"390 ₽"}
              border={"border"}
            />
            <TarifCard
              tarif={"Тариф «5 Часов»"}
              accessTf={"Доступен 24/7"}
              img={"/tarif3.svg"}
              oldprice={"Выгода: Час = 100 ₽ "}
              price={"490 ₽"}
              border={"border"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ps5;
