import React, { useRef, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/HomePage";
import Header from "./Component/Header/Header";
import Preloader from "./Component/Preloader/Preloader";
import Bronya from "./Component/Bronya/Bronya";
import ZonaPage from "./pages/ZonaPage";
import ZoneSinglePage1 from "./pages/ZoneSinglePage1";

const App = () => {
  const location = useLocation();
  const ps5Ref = useRef(null); // Реф для секции Ps5
  const bronyaRef = useRef(null); // Реф для секции Bronya
  const bookingRef = useRef(null); // Реф для секции Booking
  const [loading, setLoading] = useState(true);

  // Скролл до секции Ps5
  const handleScrollToPs5 = () => {
    if (ps5Ref.current) {
      ps5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Скролл до секции Bronya
  const handleScrollToBronya = () => {
    if (bronyaRef.current) {
      bronyaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Скролл до секции Booking
  const handleScrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  // Выбираем обработчик прокрутки в зависимости от текущей страницы
  const getScrollHandler = () => {
    if (location.pathname === "/ZonaSinglePage/1") {
      return handleScrollToBooking;
    } else if (location.pathname === "/ZonaPage") {
      return handleScrollToPs5;
      
    } else {
      return handleScrollToBronya;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Header
            {...getHeaderProps(location.pathname)}
            onScrollToBronya={getScrollHandler()} // Передаем корректный обработчик
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Bronya ref={bronyaRef} />
                  </>
                }
              />
              <Route
                path="/ZonaPage"
                element={<ZonaPage ps5Ref={ps5Ref} />} // Передаём реф в компонент ZonaPage
              />
              <Route
                path="/ZonaSinglePage/1"
                element={<ZoneSinglePage1 bookRef={bookingRef} />} // Передаем реф Booking
              />
            </Routes>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const getHeaderProps = (pathname) => {
  const isHomePage = pathname === "/";
  return {
    logo: "/logo.png",
    location: isHomePage ? "На профсоюзной" : "На Бауманской",
    adres: isHomePage
      ? "Профсоюзная улица 22/10к1"
      : "Спартаковская улица 21",
    num: isHomePage ? "8 977 320 88 88" : "8 977 752 20 01",
    bg: isHomePage ? "img" : "img2",
    color: isHomePage ? "color1" : "color2",
  };
};

export default App;
