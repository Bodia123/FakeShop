import React from 'react';
import ROUTES from 'utils/routes';
import { Link } from 'react-router-dom';
import css from 'styles/Footer.module.css';
const Footer = () => (
  <section className={css.footer}>
    <div className={css.logo}>
      <Link to={ROUTES.HOME}>FakeShop</Link>
    </div>

    <div className={css.rights}>
      Зроблено{' '}
      <a href="https://github.com/Bodia123" target="_blank" rel="noreferrer">
        Богданом
      </a>
    </div>

    <div className={css.socials}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>

      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
);

export default Footer;
