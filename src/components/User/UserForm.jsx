import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSingUpForm from './UserSingUpForm';
import css from 'styles/User.module.css';
import { toggleForm } from 'Features/User/UserSlice';
function UserForm() {
  const { showForm } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(toggleForm(false));
  };
  return showForm ? (
    <>
      <div className={css.overlay} onClick={closeForm} />
      <UserSingUpForm closeForm={closeForm} />
    </>
  ) : (
    <></>
  );
}

export default UserForm;
