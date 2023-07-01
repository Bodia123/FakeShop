import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from 'styles/Product.module.css';
import ROUTES from 'utils/routes';

const SIZES = [4, 5, 6];

function Product({ images, title, price, description }) {
  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  return (
    <section className={css.product}>
      <div className={css.images}>
        <div
          className={css.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={css['images-list']}>
          {images.map((image, i) => (
            <div
              key={i}
              className={css.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={css.info}>
        <h1 className={css.title}>{title}</h1>
        <div className={css.price}>{price}$</div>
        <div className={css.color}>
          <span>Color:</span> Green
        </div>
        <div className={css.sizes}>
          <span>Size:</span>
          <div className={css.list}>
            {SIZES.map(size => (
              <div
                className={`${css.size} ${
                  currentSize === size ? css.active : ''
                }`}
                onClick={() => setCurrentSize(size)}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.actions}>
          <button className={css.add} disabled={!currentSize}>
            Додати до корзини
          </button>
          <button className={css.favourite}>Додати до улюблених</button>
        </div>
        <div className={css.bottom}>
          <div className={css.purchase}>19 людей придбало</div>
          <Link to={ROUTES.HOME}>Повернутись до магазину</Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
