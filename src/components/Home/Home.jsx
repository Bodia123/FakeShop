import React, { useEffect } from 'react';
import Poster from 'components/Poster/Poster';
import Products from 'components/Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import Categories from 'components/Categories/Categories';
import Banner from 'components/Banner/Banner';
import { filterByPrice } from 'Features/Products/ProductsSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector(state => state);
  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Популярні" />
      <Categories
        products={categories.list}
        amount={5}
        title="Категорії, які варті вашої уваги"
      />
      <Banner />
      <Products products={filtered} amount={5} title="Дешевше ніж 100$" />
    </>
  );
};
export default Home;
