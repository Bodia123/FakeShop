import React from 'react';
import Poster from 'components/Poster/Poster';
import Products from 'components/Products/Products';
import { useSelector } from 'react-redux';
import Categories from 'components/Categories/Categories';
import Banner from 'components/Banner/Banner';

export const Home = () => {
  const { products, categories } = useSelector(state => state);
  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Популярні" />
      <Categories
        products={categories.list}
        amount={5}
        title="Варто вашої уваги"
      />
      <Banner />
    </>
  );
};
export default Home;
