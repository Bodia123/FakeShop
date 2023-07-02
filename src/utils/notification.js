import { toast } from 'react-toastify';
export const successNotification = text => {
  return toast.success(text, {
    position: 'top-right',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
export const errorNotification = text => {
  return toast.warn(text, {
    position: 'top-right',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
