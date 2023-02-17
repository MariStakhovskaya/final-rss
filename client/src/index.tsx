import ReactDOM from 'react-dom/client';
import './index.css';
import './style/dark.scss';
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
import Admin from './routes/admin/adminPages/admin';
import List from './routes/admin/listPage/List';
import Single from './routes/admin/single/Single';
import AdminNew from './routes/admin/new/AdminNew';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/AuthContext';
import App from './App';

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
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/admin/allUsers',
        element: <List title="All Users" />,
      },
      {
        path: '/admin/allMeeting',
        element: <List title="All Meeting" />,
      },
      {
        path: '/admin/user/:id',
        element: <Single />,
      },
      {
        path: 'admin/meeting/:id',
        element: <Single />,
      },
      {
        path: '/admin/newUser',
        element: <AdminNew title="Add new user" />,
      },
      {
        path: '/admin/newMeeting',
        element: <AdminNew title="Add new meeting" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      {/*  <DarkModeContextProvider>
        <AuthContextProvider> */}
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </Provider>
      {/* </AuthContextProvider>
      </DarkModeContextProvider> */}
    </>
  </React.StrictMode>
);
