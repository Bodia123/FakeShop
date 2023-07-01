import React from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import Home from 'components/Home/Home';
import ROUTES from 'utils/routes';
import SingleProduct from 'components/Products/SingleProduct';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};
export default AppRoutes;
