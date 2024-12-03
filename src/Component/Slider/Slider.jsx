import React from 'react'
import s from './Slider.module.scss'

const Slider = () => {
  return (
 <>
 <div className={s.slider}>
    <div className={s.wrapper}>
    <div className={s.slider}>
      <div className={s.slides}>
        <div className={s.slide}>
          <img className={s.imgSlide} src="/slides1.jpg" alt="Image 1"/>
          </div>
        <div className={s.slide}>
          <img className={s.imgSlide} src="/slides2.jpg" alt="Image 2"/>
          </div>
        <div className={s.slide}>
          <img className={s.imgSlide} src="/slides3.jpg" alt="Image 3"/>
          </div>

        <div className={s.slide}>
          <img className={s.imgSlide} src="/slides4.jpg" alt="Image 4"/>
          </div>
        <div className={s.slide}>
          <img className={s.imgSlide} src="/slides5.jpg" alt="Image 5"/>
          </div>
        <div className={s.slide}>
          <img className={s.imgSlide} src="/slides6.jpg" alt="Image 6"/>
          </div>
      </div>
      <button className={s.prev}>&#10094;</button>
      <button className={s.next}>&#10095;</button>
    </div>
    </div>
 </div>
 
 
 
 </>
  )
}

export default Slider