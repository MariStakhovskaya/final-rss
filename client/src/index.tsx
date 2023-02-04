import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import React from 'react';
import Root from './routes/root/Root';
import ErrorPage from './routes/error-page';
import { StartCarGame } from './routes/cars-game-pages/start-car-game/start-car-game';
import { FinishCarGame } from './routes/cars-game-pages/finish-car-game/finish-car-game';
import { GameCar } from './routes/cars-game-pages/game-car/game-car';
import Login from './routes/login/Login';
import Registration from './routes/registration/Registration';
import { CarsGame } from './routes/cars-game';
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
        element: <CarsGame />,
        children: [
          {
            index: true,
            element: <StartCarGame />,
          },
          {
            path: 'playCarsGame',
            element: <GameCar />,
          },
          {
            path: 'finishCarsGame',
            element: <FinishCarGame />,
          },
        ],
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
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
  // </React.StrictMode>
);
