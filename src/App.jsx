import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Sayts from "./pages/SaytsPage";
import Home from "./pages/HomePage";
import Zona from "./pages/ZonaPage";
import Images from "./pages/ImagesPage";
import Contact from "./pages/ContactPage";
import Header from "./Component/Header/Header";
import Price from "./pages/PricePage";
import Preloader from "./Component/Preloader/Preloader";
import ZoneSinglePage1 from "./pages/ZoneSinglePage1";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Состояние для прелоадера

  useEffect(() => {
    window.scrollTo(0, 0);

    // Искусственная задержка для прелоадера
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 секунды

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Показываем прелоадер, пока загрузка активна
  }

  return (
    <>
      {/* Анимация Header с уникальным ключом для перерендеринга */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // Уникальный ключ для Header на основе текущего маршрута
          initial={{ opacity: 0, y: -50 }} // Начальная анимация
          animate={{ opacity: 1, y: 0 }}  // Анимация появления
          exit={{ opacity: 0, y: -50 }}   // Анимация исчезновения
          transition={{
            duration: 0.5,           // Время анимации
            ease: "easeInOut",       // Тип плавности
          }}
        >
          <Header
            logo={"/logo.png"}
            location={location.pathname === "/" ? "На профсоюзной" : "НА БАУМАНСКОЙ"}
            adres={location.pathname === "/" ? "Профсоюзная улица 22/10к1" : "Спартаковская улица 21"}
            num={location.pathname === "/" ? "8 977 320 88 88" : "8 977 752 20 01"}
            bg={location.pathname === "/" ? "img" : "img2"}
            color={location.pathname === "/" ? "color1" : "color2"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Анимация переходов между страницами */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWithAnimation>
                <Home />
              </PageWithAnimation>
            }
          />
          <Route
            path="/ZonaPage"
            element={
              <PageWithAnimation>
                <Zona />
              </PageWithAnimation>
            }
          />
          <Route
            path="/PricePage"
            element={
              <PageWithAnimation>
                <Price />
              </PageWithAnimation>
            }
          />
          <Route
            path="/ImagesPage"
            element={
              <PageWithAnimation>
                <Images />
              </PageWithAnimation>
            }
          />
          <Route
            path="/ContactPage"
            element={
              <PageWithAnimation>
                <Contact />
              </PageWithAnimation>
            }
          />
          <Route
            path="/SaytsPage"
            element={
              <PageWithAnimation>
                <Sayts />
              </PageWithAnimation>
            }
          />
          <Route
            path="/zone/1"
            element={
              <PageWithAnimation>
                <ZoneSinglePage1 />
              </PageWithAnimation>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

// Компонент для анимации секций с улучшениями
const PageWithAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }} // Начальная анимация: скрыто и сдвинуто
      animate={{ opacity: 1, x: 0 }}  // Анимация появления: прозрачность 1 и возвращение на место
      exit={{ opacity: 0, x: -50 }}   // Анимация скрытия: исчезает и сдвигается
      transition={{
        duration: 0.7,           // Время анимации
        ease: "easeInOut",       // Тип плавности
      }}
    >
      {children}
    </motion.div>
  );
};

export default App;
