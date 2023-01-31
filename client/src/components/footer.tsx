import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`https://rs.school/`}>RS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Footer };
