import { useGetProductQuery } from 'Features/API/ApiSlice';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES from 'utils/routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProduct } from 'Features/Products/ProductsSlice';

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);
  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProduct(data.category.id));
  }, [data, dispatch, list.length]);
  return !data ? (
    <section className="preloader">Загрузка...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title={'Схожі товари'} />
    </>
  );
}

export default SingleProduct;
