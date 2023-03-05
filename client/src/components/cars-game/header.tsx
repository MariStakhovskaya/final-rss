import styles from '../../routes/cars-game-pages/GameCar.module.css';
import { useNavigate } from 'react-router-dom';

type HeaderCarsGameType = {
  classButton: string;
};

const HeaderCarsGame = ({ classButton }: HeaderCarsGameType) => {
  const navigate = useNavigate();
  function stopGame() {
    navigate(-1);
  }
  return (
    <div className={classButton}>
      <div className={styles.back__button}>
        <button onClick={stopGame}>&#8249; Back</button>
      </div>
    </div>
  );
};
export { HeaderCarsGame };
