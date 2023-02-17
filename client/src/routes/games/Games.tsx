import SecondHeader from '../../components/secodHeader/SecondHeader';
import styles from './Games.module.css';
import gameIMG from '../../images/game_img.jpg';
import Button from '../../components/custom/button/Button';
import { Link } from 'react-router-dom';

function Games() {
  return (
    <div>
      <SecondHeader />
      <h3 className={styles.game__select}>Select a Game</h3>
      <div className={styles.games}>
        <div className={styles.game}>
          <div>
            <div className={styles.img__container}>
              <img src={gameIMG} alt='Game "Cars"' />
            </div>
            <p className={styles.title}>Cars</p>
          </div>
          <div className={styles.play__button}>
            <Link to="/games/carsGame">
              <Button name="Play" callback={() => {}} />
            </Link>
          </div>
        </div>
        <div className={styles.game}>
          <div>
            <div className={styles.img__container}>
              <img src={gameIMG} alt='Game "Cars"' />
            </div>
            <p className={styles.title}>Nonsense</p>
          </div>
          <div className={styles.play__button}>
            <Link to="/games/nonsense">
              <Button name="Play" callback={() => {}} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
