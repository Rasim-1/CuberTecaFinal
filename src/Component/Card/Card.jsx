import React from "react";
import s from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({comp, name, img, text, color, href}) => {
  return (
    <>
      <div className={s.card}>
        <p>{comp}</p>
        <h3>{name}</h3>
        <img className={s.image} src={img} alt="" />
        <h4>{text}</h4>
        <Link to={href} className={color}>Подробнее → </Link>
      </div>
    </>
  );
};

export default Card;
