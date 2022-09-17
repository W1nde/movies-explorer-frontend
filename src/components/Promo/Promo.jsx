import React from 'react';
import logo from '../../images/landing_logo.svg'

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__block'>
        <img className='promo__logo' src={logo} alt='Логотип'></img>
        <div className='promo__introduction'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
      </div>
      <div className='promo__links'>
        <a href='#about-project' className='promo__link'>Узнать больше</a>
      </div>
    </section>
  );
}

export default Promo;
