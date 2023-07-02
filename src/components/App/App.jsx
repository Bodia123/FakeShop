import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from 'Routes/Routes';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { getCategories } from 'Features/Categories/categoriesSlice';
import { getProducts } from 'Features/Products/ProductsSlice';
import UserForm from 'components/User/UserForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};
export default App;
