import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styles/Products.module.css';

function Products({ title, styles = {}, products = [], amount }) {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={css.products}>
      {title && <h2>{title}</h2>}
      <div className={css.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link className={css.product} to={`/product/${id}`} key={id}>
            <div
              className={css.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className={css.wrapper}>
              <h3 className={css.title}>{title}</h3>
              <div className={css.cat}>{cat}</div>
              <div className={css.info}>
                <div className={css.prices}>
                  <div className={css.price}>{price}$</div>
                  <div className={css.oldPrice}>{Math.floor(price * 0.8)}$</div>
                </div>
                <div className={css.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} купили
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
