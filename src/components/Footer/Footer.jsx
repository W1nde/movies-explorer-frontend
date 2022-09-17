import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__info'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright'>
        <p className='footer__date'>&copy; 2022</p>
        <ul className='footer__links'>
          <li className='footer__column'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'>Яндекс.Практикум</a>
            <a
              className='footer__link'
              href='https://github.com/Yandex-Practicum'
              target='_blank'
              rel='noreferrer'>Github</a>
            <a
              className='footer__link'
              href='https://vk.com'
              target='_blank'
              rel='noreferrer'>VK</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
