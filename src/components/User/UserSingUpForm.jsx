import { createUser } from 'Features/User/UserSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from 'styles/User.module.css';

function UserSingUpForm({ closeForm }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every(val => val);
    if (!isNotEmpty) return;
    dispatch(createUser(values));
    closeForm();
  };
  return (
    <div className={css.wrapper}>
      <div className={css.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={css.title}>SignUp</div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.group}>
          <input
            type="email"
            name="email"
            placeholder="ваш емейл"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={css.group}>
          <input
            type="name"
            name="name"
            placeholder="ваше ім'я"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={css.group}>
          <input
            type="password"
            name="password"
            placeholder="ваш пароль"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={css.group}>
          <input
            type="avatar"
            name="avatar"
            placeholder="ваше фото"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={css.link}>У мне уже є аккаунт</div>
        <button type="submit" className={css.submit}>
          Створити аккаунт
        </button>
      </form>
    </div>
  );
}

export default UserSingUpForm;
