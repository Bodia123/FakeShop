import { updateUser } from 'Features/User/UserSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from 'styles/Profile.module.css';

function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every(val => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };
  return (
    <section className={css.profile}>
      {!currentUser ? (
        <span>Треба увійти в аккаунт!</span>
      ) : (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.group}>
            <input
              type="email"
              name="email"
              placeholder="ваш емейл"
              value={values.email}
              autoComplete="off"
              onChange={handleChange}
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
            />
          </div>

          <button type="submit" className={css.submit}>
            Обновити!
          </button>
        </form>
      )}
    </section>
  );
}

export default Profile;
