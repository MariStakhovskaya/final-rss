import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';

const Navbar = () => {
  //const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <Brightness6OutlinedIcon
              className="icon"
              //onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://cropas.by/wp-content/uploads/2015/05/admin.jpg"
              alt="Photo admin"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
