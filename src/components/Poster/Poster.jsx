import React from 'react';
import css from 'styles/Home.module.css';
import BG from 'images/computer.png';

function Poster() {
  return (
    <section className={css.home}>
      <div className={css.title}>Pозпродаж 20%</div>
      <div className={css.product}>
        <div className={css.text}>
          <div className={css.subtitle}>Топ продаж 2023</div>
          <h1 className={css.head}>Ім'я товару!</h1>
          <button className={css.button}>Почати покупки</button>
        </div>
        <div className={css.image}>
          <img src={BG} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Poster;
