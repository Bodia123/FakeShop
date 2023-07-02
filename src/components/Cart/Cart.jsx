import { addItemToCart, removeItemFromCart } from 'Features/User/UserSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from 'styles/Cart.module.css';
import { sumBy } from 'utils/common';

function Cart() {
  const { cart } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };
  const removeItem = id => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className={css.cart}>
      <h2 className={css.title}>Ваша корзина</h2>
      {!cart.length ? (
        <div className={css.empty}>Тут пусто...</div>
      ) : (
        <>
          <div className={css.list}>
            {cart.map(item => {
              const { title, category, images, price, id, quantity } = item;
              return (
                <div className={css.item} key={id}>
                  <div
                    className={css.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={css.info}>
                    <h3 className={css.name}>{title}</h3>
                    <div className={css.category}>{category.name}</div>
                  </div>
                  <div className={css.price}>{price}$</div>
                  <div className={css.quantity}>
                    <div
                      className={css.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg>
                    </div>
                    <span>{quantity}</span>
                    <div
                      className={css.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={css.total}>{price * quantity}$</div>
                  <div
                    className={css.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={css.actions}>
            <div className={css.total}>
              Загальна ціна:{' '}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>
            <button className={css.proceed}>Оформити замолвення</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
