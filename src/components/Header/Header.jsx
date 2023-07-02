import React, { useEffect, useState } from 'react';
import css from 'styles/Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES from 'utils/routes';

import AVATAR from 'images/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from 'Features/User/UserSlice';
const Header = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: 'Гость', avatar: AVATAR });
  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);
  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link to={ROUTES.HOME}>FakeShop</Link>
      </div>
      <div className={css.info}>
        <div className={css.user} onClick={handleClick}>
          <div
            className={css.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={css.userName}>{values.name}</div>
        </div>
      </div>
      <form className={css.form}>
        <div className={css.icon}>
          <svg className={css['icon-search']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
          </svg>
        </div>
        <div className={css.input}>
          <input
            type="search"
            name="search"
            placeholder="Пошук"
            autoComplete="off"
            value=""
            onChange={() => {}}
          />
        </div>
        {false && <div className={css.box}></div>}
      </form>
      <div className={css.account}>
        <Link to={ROUTES.HOME} className={css.favourites}>
          <svg className={css['icon-fav']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
          </svg>
        </Link>
        <Link to={ROUTES.CART} className={css.cart}>
          <svg className={css['icon-cart']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
          </svg>
          <span className={css.count}>2</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
