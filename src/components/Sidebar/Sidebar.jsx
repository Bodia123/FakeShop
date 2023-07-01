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
        <a href="/help" target="_blank" className={css.link}>
          Допомога
        </a>
        <a href="/help" target="_blank" className={css.link}>
          FAQ
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
