import React from 'react';
import Poster from 'components/Poster/Poster';
import Products from 'components/Products/Products';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { list } = useSelector(({ products }) => products);
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Популярні" />
    </>
  );
};
export default Home;
