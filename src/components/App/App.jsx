import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from 'Routes/Routes';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { getCategories } from 'Features/Categories/categoriesSlice';
import { getProducts } from 'Features/Products/ProductsSlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};
export default App;
