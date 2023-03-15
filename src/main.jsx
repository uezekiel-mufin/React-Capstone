import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import './index.css';
import store from './Redux/store';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Phones from './components/Phones';
import Specs from './components/Specs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/brands/:slug',
        element: <Phones />,
      },
      {
        path: '/brands/phones/:slug',
        element: <Detail />,
      },
      {
        path: '/brands/phones/details/:slug/:name',
        element: <Specs />,
      },
    ],
  },
]);
export default router;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
