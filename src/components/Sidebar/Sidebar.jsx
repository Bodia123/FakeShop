import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from 'styles/Sidebar.module.css';
const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  return (
    <section className={css.sidebar}>
      <div className={css.title}>Категорії</div>
      <nav>
        <ul className={css.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${css.link} ${isActive ? css.active : ''}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={css.footer}>
        <p className={css.link}>Допомога</p>
        <p className={css.link}>FAQ</p>
      </div>
    </section>
  );
};

export default Sidebar;
