import style from './GameCar.module.css';
import { FieldCarsGame } from '../../components/cars-game/field';

const GameCar = () => {
  return (
    <div className={style.container}>
      <FieldCarsGame />
    </div>
  );
};

export { GameCar };
