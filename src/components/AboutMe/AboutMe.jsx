import React, { forwardRef } from 'react';
import avatar from '../../images/avatar.jpg';

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className='about-me' id='about-me' ref={ref}>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__info-block'>
          <h3 className='about-me__name'>Марк</h3>
          <p className='about-me__profession'>Студент направления "менеджмент", 18 лет</p>
          <p className='about-me__description'>
            Родился и живу в Красноярске. Закончил 11 классов и поступаю в КГАУ на факультет менеджмента. Мечтаю о своей студии заказной разработки и хочу найти своё место в IT.
          </p>
          <ul className='about-me__links'>
            <li>
              <a
                className='about-me__link'
                href='https://vk.com/markshadpalov'
                target='_blank'
                rel='noreferrer'
              >
                VK
              </a>
            </li>
            <li>
              <a
                className='about-me__link'
                href='https://github.com/w1nde'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className='about-me__avatar-block'>
          <img className='about-me__avatar' src={avatar} alt='аватар'></img>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
