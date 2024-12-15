import React, { useState, useEffect } from "react";
import s from "./Preloader.module.scss";

const Preloader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Имитируем завершение загрузки через 3 секунды
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000); // Замените на реальное время загрузки

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={s.Preloader}>
      <div className={s.container}>
        {/* Логотип */}
        <i className={s.logoText}>Кибертека</i>

        {/* Анимация палочек */}
        <div className={`${s.loader} ${loadingComplete ? s.complete : ""}`}>
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className={`${s.bar} ${loadingComplete ? s.complete : ""}`}
              style={{
                animationDelay: `${index * 0.05}s`, // Задержка для анимации
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
