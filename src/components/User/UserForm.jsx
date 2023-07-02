import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSingUpForm from './UserSingUpForm';
import css from 'styles/User.module.css';
import { toggleForm, toggleFormType } from 'Features/User/UserSlice';
import UserLoginForm from './UserLoginForm';
function UserForm() {
  const { showForm, formType } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = type => dispatch(toggleFormType(type));
  return showForm ? (
    <>
      <div className={css.overlay} onClick={closeForm} />
      {formType === 'singup' ? (
        <UserSingUpForm
          closeForm={closeForm}
          toggleCurrentFormType={toggleCurrentFormType}
        />
      ) : (
        <UserLoginForm
          closeForm={closeForm}
          toggleCurrentFormType={toggleCurrentFormType}
        />
      )}
    </>
  ) : (
    <></>
  );
}

export default UserForm;
