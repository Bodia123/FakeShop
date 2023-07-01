import { useGetProductQuery } from 'Features/API/ApiSlice';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES from 'utils/routes';
import Product from './Product';

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);
  return !data ? (
    <section className="preloader">Загрузка...</section>
  ) : (
    <>
      <Product {...data} />
    </>
  );
}

export default SingleProduct;
