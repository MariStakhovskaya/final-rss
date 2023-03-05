import { useEffect, useState } from 'react';
import style from '../../routes/cars-game-pages/GameCar.module.css';
type FooterCarsGameType = {
  time: string;
  counter: number;
  lives: number;
  result?: boolean;
};
type Result = {
  resultLives: number;
  resultCounter: number;
  resultTime: string;
};
const result: Result[] = [];
const FooterCarsGame = (props: FooterCarsGameType) => {
  function getClassIcons() {
    const classIcons = `${style.icons} material-symbols-outlined`;
    return classIcons;
  }
  function getResult() {
    return {
      resultLives: props.lives,
      resultCounter: props.counter,
      resultTime: props.time,
    };
  }
  if (props.result === true) {
    result.push(getResult());
    localStorage.setItem('carsGame', JSON.stringify(result));
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
    </div>
  );
};
export { FooterCarsGame };
