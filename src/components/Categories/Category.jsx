import { useGetProductsQuery } from 'Features/API/ApiSlice';
import Products from 'components/Products/Products';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import css from 'styles/Category.module.css';

function Category() {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);
  const defaultValues = {
    title: '',
    price_min: 0,
    price_max: 0,
  };
  const defaultParams = {
    categoryId: id,
    limit: 10,
    offset: 0,
    ...defaultValues,
  };
  const [isEnd, setEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setEnd(true);

    setItems(_items => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find(item => item.id === id * 1);

    setCat(category);
  }, [list, id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setEnd(false);
  };

  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>{cat?.name}</h2>
      <form className={css.filters} onSubmit={handleSubmit}>
        <div className={css.filter}>
          <input
            type="text"
            name="title"
            placeholder="назва продукту"
            onChange={handleChange}
            value={values.title}
          />
        </div>
        <div className={css.filter}>
          <input
            type="number"
            name="price_min"
            placeholder="0"
            onChange={handleChange}
            value={values.price_min}
          />
          <span>Ціна від</span>
        </div>
        <div className={css.filter}>
          <input
            type="number"
            name="price_max"
            placeholder="0"
            onChange={handleChange}
            value={values.price_max}
          />
          <span>Ціна до</span>
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Завантаження...</div>
      ) : !isSuccess || !items.length ? (
        <div className={css.back}>
          <span>No results</span>
          <button onClick={handleReset}>Обнулити</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}

      {!isEnd && (
        <div className={css.more}>
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            Завантажити ще
          </button>
        </div>
      )}
    </section>
  );
}

export default Category;
