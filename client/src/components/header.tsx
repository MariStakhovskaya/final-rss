import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to={`login`}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`registration`}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Header };
