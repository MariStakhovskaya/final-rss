import { NavLink } from 'react-router-dom';

const StartCarGame = () => {
  return (
    <>
      <button>
        <NavLink to="playCarsGame">Начало игры</NavLink>
      </button>
      <button>Правила игры</button>
    </>
  );
};

export { StartCarGame };
