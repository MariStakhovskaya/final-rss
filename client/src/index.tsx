import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import React from 'react';
import Root from './routes/root/Root';
import ErrorPage from './routes/error-page';

import Login from './routes/login/Login';
import Registration from './routes/registration/Registration';
import FunnyStoryGame from './routes/funnyStoryGame/FunnyStoryGame';
import { GameCar } from './routes/cars-game-pages/game-car';
// import { HomePage } from './routes/home-page';
import Start from './routes/start/Start';
import Profile from './routes/profile/Profile';
import Meetings from './routes/meetings/Meetings';
import MeetingDetails from './routes/meetings/MeetingDetails';

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
        path: '/funnyStory',
        element: <FunnyStoryGame />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/profile/meetings',
        element: <Meetings />,
      },
      {
        path: '/profile/meetings/:id',
        element: <MeetingDetails />,
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
