import styles from './game-car.module.css';
import hero from '../../../assets/car-game/hero.png';

const GameCar = () => {
  return (
    <>
      <div className="game">
        <div className="word">ABCDE</div>
        <div className="car">
          <img src={hero} alt="Hero" />
        </div>
      </div>
      <div className="footer">
        <p className="counter">
          Счёт: <span>0</span>
        </p>
        <p className="time">
          Время: <span>0:0</span>
        </p>
        <p className="errors">
          Жизни: <span>3</span>
        </p>
        <p className="level">
          Счёт: <span>0</span>
        </p>
      </div>
    </>
  );
};

export { GameCar };
