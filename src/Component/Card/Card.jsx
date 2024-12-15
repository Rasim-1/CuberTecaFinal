import React from "react";
import s from "./Card.module.scss";

const Card = ({comp, name, img, text, color}) => {
  return (
    <>
      <div className={s.card}>
        <p>{comp}</p>
        <h3>{name}</h3>
        <img className={s.image} src={img} alt="" />
        <h4>{text}</h4>
        <a href="" className={color}>Подробнее → </a>
      </div>
    </>
  );
};

export default Card;
