import React from 'react';
import css from 'styles/Home.module.css';
import bannerImg from 'images/banner.png';

function Banner() {
  return (
    <section className={css.banner}>
      <div className={css.left}>
        <p className={css.content}>
          Новорічні<span>ЗНИЖКИ</span>
        </p>
        <button className={css.more}>Детальніше</button>
      </div>
      <div
        className={css.right}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className={css.discount}>
          дешевше на <span>50%</span>
        </p>
      </div>
    </section>
  );
}

export default Banner;
