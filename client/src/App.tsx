import { Route, Routes } from 'react-router-dom';
import Admin from './routes/admin/adminPages/AdminPage';
import AdminRoot from './routes/admin/AdminRoot';
import List from './routes/admin/listPage/List';
import AdminNew from './routes/admin/new/AdminNew';
import Single from './routes/admin/single/Single';
import { GameCar } from './routes/cars-game-pages/game-car';
import ErrorPage from './routes/error-page';
import FunnyStoryGame from './routes/funnyStoryGame/FunnyStoryGame';
import Games from './routes/games/Games';
import Login from './routes/login/Login';
import MeetingDetails from './routes/meetings/MeetingDetails';
import Meetings from './routes/meetings/Meetings';
import Profile from './routes/profile/Profile';
import Registration from './routes/registration/Registration';
import Root from './routes/root/Root';
import Start from './routes/start/Start';
import { RoomProvider } from './routes/videochat/context/RoomContext';
import HomeVideo from './routes/videochat/pages/HomeVideo';
import { RoomPage } from './routes/videochat/pages/RoomPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/meetings/:id" element={<MeetingDetails />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/carsGame" element={<GameCar />} />
          <Route path="/games/nonsense" element={<FunnyStoryGame />} />
          {/*  <Route path="/admin" element={<Admin />} />
          <Route path="/admin/allUsers" element={<List title="All Users" />} />
          <Route
            path="/admin/allMeeting"
            element={<List title="All Meeting" />}
          />
          <Route path="/admin/user/:id" element={<Single />} />
          <Route path="/admin/meeting/:id" element={<Single />} />
          <Route
            path="/admin/newUser"
            element={<AdminNew title="Add new user" />}
          />
          <Route
            path="/admin/newMeeting"
            element={<AdminNew title="Add new meeting" />}
          /> */}
          <Route
            path="/meetingRoom"
            element={
              <RoomProvider>
                <HomeVideo />
              </RoomProvider>
            }
          />
          <Route
            path="/meetingRoom/:id"
            element={
              <RoomProvider>
                <RoomPage />
              </RoomProvider>
            }
          />
        </Route>
        <Route path="/admin" element={<AdminRoot />}>
          <Route index element={<Admin />} />
          <Route path="/admin/allUsers" element={<List title="All Users" />} />
          <Route
            path="/admin/allMeeting"
            element={<List title="All Meeting" />}
          />
          <Route path="/admin/user/:id" element={<Single />} />
          <Route path="/admin/meeting/:id" element={<Single />} />
          <Route
            path="/admin/newUser"
            element={<AdminNew title="Add new user" />}
          />
          <Route
            path="/admin/newMeeting"
            element={<AdminNew title="Add new meeting" />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
