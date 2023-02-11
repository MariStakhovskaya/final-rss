import style from '../../routes/cars-game-pages/GameCar.module.css';
type FooterCarsGameType = {
  time: string;
  counter: number;
  lives: number;
};

const FooterCarsGame = (props: FooterCarsGameType) => {
  function getClassIcons() {
    const classIcons = `${style.icons} material-symbols-outlined`;
    return classIcons;
  }
  return (
    <div className={style.footer}>
      <div className={style.counter}>
        Счёт:
        <div className={style.span_wrapper}>
          <span className={style.span}>{props.counter}</span>
          <span className={getClassIcons()}>speed</span>
        </div>
      </div>
      <div className={style.time}>
        Время:
        <div className={style.span_wrapper}>
          <span className={style.span}>{props.time}</span>
          <span className={getClassIcons()}>timer</span>
        </div>
      </div>
      <div className={style.errors}>
        Жизни:
        <div className={style.span_wrapper}>
          <span className={style.span}>{props.lives}</span>
          <span className={getClassIcons()}>cardiology</span>
        </div>
      </div>
      <div className={style.level}>
        Уровень:
        <div className={style.span_wrapper}>
          <span className={style.span}>0</span>
          <span className={getClassIcons()}>signal_cellular_alt</span>
        </div>
      </div>
    </div>
  );
};
export { FooterCarsGame };
