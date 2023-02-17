import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import {
  DarkModeContext,
  DarkModeContextProvider,
} from './context/darkModeContext';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import Login from './routes/login/Login';
import Root from './routes/root/Root';
import ErrorPage from './routes/error-page';
import { GameCar } from './routes/cars-game-pages/game-car';
import FunnyStoryGame from './routes/funnyStoryGame/FunnyStoryGame';
import Start from './routes/start/Start';
import Registration from './routes/registration/Registration';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }: any) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className={darkMode ? 'app dark' : 'dark'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route index element={<Root></Root>} errorElement={<ErrorPage />} />
            <Route
              path="/carsGame"
              element={
                <RequireAuth>
                  <GameCar />
                </RequireAuth>
              }
            />
            <Route
              path="/funnyStory"
              element={
                <RequireAuth>
                  <FunnyStoryGame />
                </RequireAuth>
              }
            />
            <Route
              path="/registration"
              element={
                <RequireAuth>
                  <Registration />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
