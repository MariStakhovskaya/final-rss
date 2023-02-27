import React from 'react';
import style from '../../routes/cars-game-pages/GameCar.module.css';
import heroImg from '../../images/car-game/hero.png';
import { arrWords, createWord, getRandomNumber } from './word';
import { HeaderCarsGame } from './header';
import { FooterCarsGame } from './footer';
import { useLocation, useNavigate } from 'react-router-dom';

type Field = {
  fieldHeight: number;
  fieldWidth: number;
};

type Hero = {
  coordX: number;
  coordY: number;
  width: number;
  height: number;
  position: number;
  step: number;
};

type Word = {
  height: number;
  width: number;
  leftCoord: number;
  topCoord: number;
};

type Coords = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Result = {
  resultLives: number;
  resultCounter: number;
  resultTime: string;
};

const FieldCarsGame = () => {
  const refField = React.createRef<HTMLDivElement>();
  const refHero = React.createRef<HTMLDivElement>();
  const wordRef = React.createRef<HTMLDivElement>();

  const [wordRender, setWordRender] = React.useState('abcd');
  const [lives, setLives] = React.useState(3);
  const [counter, setCounter] = React.useState(0);
  const [time, setTime] = React.useState('0:0');
  const [result, setResult] = React.useState({} as Result);
  const [move, setMove] = React.useState(true);
  const [win, setWin] = React.useState(false);
  const [isStop, setIsStop] = React.useState(false);
  const [modalWindow, setModalWindow] = React.useState(false);
  const [fieldState, setFieldState] = React.useState({} as Field);
  const [heroState, setHeroState] = React.useState({} as Hero);

  const navigate = useNavigate();
  const location = useLocation().pathname;

  let word: Word;
  let yCount = 0;
  let xCount = 0;
  let min = 0;
  let sec = 0;
  let changeX = 0;
  let counterS = 0;
  let livesS = 3;

  let timer: NodeJS.Timer;
  let timeTimer: NodeJS.Timer;

  let coordsWord: Coords;
  let coordsHero: Coords;

  React.useEffect(() => {
    const heroData = refHero.current!.getBoundingClientRect();
    setHeroState((prev) => {
      return {
        ...prev,
        coordX: heroData.x,
        coordY: heroData.y,
        width: heroData.width,
        height: heroData.height,
      };
    });
  }, [heroState.coordX, heroState.coordY, heroState.width, heroState.height]);
  React.useEffect(() => {
    const fieldData = refField.current!.getBoundingClientRect();
    setFieldState((prev) => {
      return {
        ...prev,
        fieldHeight: fieldData.height,
        fieldWidth: fieldData.width,
        x: fieldData.x,
        y: fieldData.y,
      };
    });
  }, [fieldState.fieldHeight, fieldState.fieldWidth]);

  React.useEffect(() => {
    document.addEventListener('keydown', moveHero);
    return () => {
      document.removeEventListener('keydown', moveHero);
    };
  }, [fieldState.fieldHeight, fieldState.fieldWidth, wordRender]);

  React.useEffect(() => {
    startTimer();
    timeTimer = setInterval(() => {
      getTimer();
    }, 1000);
    console.log(location);
  }, []);

  function moveWordLeft() {
    const wordW = document.getElementById('word');
    const field = document.getElementById('game');
    const widthField = parseInt(getComputedStyle(field!).width);
    const left = parseInt(getComputedStyle(wordW!).left);
    const width = parseInt(getComputedStyle(wordW!).width);
    if (widthField < left + width || left < width) {
      return;
    }
    wordW!.style.left = `${getRandomNumber(0, widthField - width)}px`;
  }

  function moveWordTop() {
    const wordW = document.getElementById('word');
    const field = document.getElementById('game');
    const heightField = parseInt(getComputedStyle(field!).height);
    const heightWord = parseInt(getComputedStyle(wordW!).height);
    if (changeX > heightField - heightWord) {
      clearInterval(timer);
      startTimer();
    }
    wordW!.style.top = `${changeX}px`;
    changeX = changeX + 20;
    checkCoords();
  }

  function checkCoords() {
    const wordW = document.getElementById('word')!;
    coordsWord = {
      x: parseInt(getComputedStyle(wordW).left),
      y: parseInt(getComputedStyle(wordW).top),
      width: parseInt(getComputedStyle(wordW).width),
      height: parseInt(getComputedStyle(wordW).height),
    };
    const heroG = document.getElementById('hero')!;
    coordsHero = {
      x: parseInt(getComputedStyle(heroG).left),
      y: parseInt(getComputedStyle(heroG).top),
      width: parseInt(getComputedStyle(heroG).width),
      height: parseInt(getComputedStyle(heroG).height),
    };
    if (
      (coordsWord.x > coordsHero.x &&
        coordsWord.x < coordsHero.x + coordsHero.width &&
        coordsWord.y > coordsHero.y &&
        coordsWord.y < coordsHero.y + coordsHero.height) ||
      (coordsWord.x + coordsWord.width > coordsHero.x &&
        coordsWord.x + coordsWord.height < coordsHero.x + coordsHero.width &&
        coordsWord.y > coordsHero.y &&
        coordsWord.y < coordsHero.y + coordsHero.height) ||
      (coordsWord.x > coordsWord.x &&
        coordsWord.x < coordsHero.x + coordsHero.width &&
        coordsWord.y + coordsWord.height > coordsHero.y &&
        coordsWord.y + coordsWord.height < coordsHero.y + coordsHero.height) ||
      (coordsWord.x + coordsWord.width > coordsHero.x &&
        coordsWord.x + coordsWord.width < coordsHero.x + coordsHero.width &&
        coordsWord.y + coordsWord.height > coordsHero.y &&
        coordsWord.y + coordsWord.height < coordsHero.y + coordsHero.height)
    ) {
      const wordFinal = document.getElementById('word')!.textContent;
      clearInterval(timer);
      checkWord(wordFinal);
    }
  }

  function checkWord(wordF: string | null) {
    if (arrWords.includes(wordF!)) {
      setCounter((prev) => prev + 1);
      counterS += 1;
      startTimer();
      if (counterS === 10) {
        setWin(true);
        setModalWindow(true);
        clearInterval(timeTimer);
        setMove(false);
        setResult({
          resultLives: lives,
          resultCounter: counter,
          resultTime: time,
        });
      }
    } else {
      setLives((prev) => prev - 1);
      livesS -= 1;
      startTimer();
      if (livesS === 0) {
        setWin(false);
        setModalWindow(true);
        clearInterval(timeTimer);
        clearInterval(timer);
        setMove(false);
      }
    }
  }

  function moveHero(e: KeyboardEvent) {
    if (!move) return;
    const heroG = document.getElementById('hero');
    xCount = parseInt(getComputedStyle(heroG!).left);
    yCount = parseInt(getComputedStyle(heroG!).top);
    switch (e.code) {
      case 'ArrowDown':
        yCount += 10;
        if (yCount > fieldState.fieldHeight - heroState.height) {
          yCount = fieldState.fieldHeight - heroState.height;
        }
        break;
      case 'ArrowUp':
        yCount -= 10;
        if (yCount < 0) {
          yCount = 0;
        }
        break;
      case 'ArrowLeft':
        xCount -= 10;
        if (xCount < 0) {
          xCount = 0;
        }
        break;
      case 'ArrowRight':
        xCount += 10;
        if (xCount > fieldState.fieldWidth - heroState.width) {
          xCount = fieldState.fieldWidth - heroState.width;
        }
        break;
    }
    heroG!.style.top = yCount + 'px';
    heroG!.style.left = xCount + 'px';
  }

  function getTimer() {
    sec += 1;
    if (sec > 59) {
      min += 1;
      sec = 0;
    }
    setTime(`${min}:${sec}`);
  }

  function startTimer() {
    changeX = 0;
    setWordRender(createWord());
    const wordW = document.getElementById('word');
    wordW!.style.top = `${changeX}px`;
    if (wordRef.current !== null) {
      const wordData = wordRef.current.getBoundingClientRect();
      word = {
        height: wordData.height,
        width: wordData.width,
        leftCoord: wordData.y,
        topCoord: wordData.x,
      };
    }
    moveWordLeft();
    timer = setInterval(() => {
      moveWordTop();
    }, 500);
  }

  const styleCar = {
    backgroundImage: `url(${heroImg})`,
  };

  function getStop() {
    setIsStop(!isStop);
    clearInterval(timeTimer);
    console.log(timer);
    clearInterval(timer);
  }
  return (
    <>
      {modalWindow ? (
        <>
          <HeaderCarsGame classButton={style.header} />
          {win ? (
            <h2>Поздравляем, Вы выиграли!</h2>
          ) : (
            <h2>К сожалению, Вы проиграли!</h2>
          )}
          <FooterCarsGame
            counter={counter}
            time={time}
            lives={lives}
            result={true}
          />
        </>
      ) : (
        <>
          <HeaderCarsGame classButton={style.header} />
          <div className={style.game} ref={refField} id="game">
            <div id="word" className={style.word} ref={wordRef}>
              {wordRender}
            </div>
            <div
              id="hero"
              className={style.car}
              ref={refHero}
              style={styleCar}
            ></div>
          </div>
          <FooterCarsGame
            counter={counter}
            time={time}
            lives={lives}
            result={false}
          />
        </>
      )}
    </>
  );
};
export { FieldCarsGame };
