import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Root from './routes/root/Root';
import ErrorPage from './routes/error-page';
import Login from './routes/login/Login';
import Registration from './routes/registration/Registration';
import { GameCar } from './routes/cars-game-pages/game-car';
// import { HomePage } from './routes/home-page';
import Start from './routes/start/Start';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: '/carsGame',
        element: <GameCar />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>
);
