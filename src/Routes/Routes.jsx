import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from 'utils/routes';
// components
import Home from 'components/Home/Home';
import SingleProduct from 'components/Products/SingleProduct';
import Profile from 'components/Profile/Profile';
import SingleCategory from 'components/Categories/SingleCategory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    </Routes>
  );
};
export default AppRoutes;
