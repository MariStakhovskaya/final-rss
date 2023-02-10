import { createRef, useEffect, useState } from 'react';
import {
  can,
  howMuchTime,
  howMuchMoney,
  names,
  what,
  when,
  where,
  why,
  want,
  defaultAnswer,
  quastions,
} from '../../data';
import styles from './FunnyStoryGame.module.css';

function FunnyStoryGame() {
  const handleRandomString = (mass: string[]): string => {
    const r = Math.floor(Math.random() * mass.length);

    return mass[r];
  };

  const generateAnswer = (mass: string[]): void => {
    const answer = handleRandomString(mass);

    if (answer[answer.length - 1] === '?') setContent([...content, answer]);
    else
      setContent([...content, answer + '. ' + handleRandomString(quastions)]);
  };

  const [content, setContent] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>('');

  const elBlock = createRef<HTMLDivElement>();

  const handleSetValue = (str: string): void => {
    setValue(str);
  };

  const handleSetMessage = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') handleSetContent();
  };

  const handleSetContent = (): void => {
    if (value !== '') setContent([...content, value]);
    handleSetValue('');
  };

  useEffect((): void => {
    if (elBlock.current) elBlock.current.scrollIntoView();
  }, [content]);

  const [dots, setDots] = useState<string>('.');

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      dots.length === 3 ? setDots('.') : setDots(dots + '.');
      if (content.length % 2 !== 0) {
        clearInterval(interval);
        setDots('.');
      }
    }, 500);
    return () => clearInterval(interval);
  }, [dots, content]);

  useEffect((): void => {
    if (content.length % 2 === 0 && content.length !== 0) {
      const quastion: string =
        content[content.length - 1]
          .match(/\(.+\)/)?.[0]
          .replace(/[\(\)\?\s]/g, '') || '';

      console.log(quastion);

      if (quastion) {
        setTimeout(() => {
          switch (quastion.toLowerCase()) {
            case 'where':
              generateAnswer(where);
              break;
            case 'why':
              generateAnswer(why);
              break;
            case 'when':
              generateAnswer(when);
              break;
            case 'what':
              generateAnswer(what);
              break;
            case 'can':
              generateAnswer(can);
              break;
            case 'howmuchtime':
              generateAnswer(howMuchTime);
              break;
            case 'want':
              generateAnswer(want);
              break;
            case 'howmuchmoney':
              generateAnswer(howMuchMoney);
              break;
            default:
              setContent([...content, handleRandomString(defaultAnswer)]);
              break;
          }
        }, 3000);
      } else generateAnswer(defaultAnswer);
    }
  }, [content]);

  useEffect((): void => {
    setTimeout(() => {
      setContent([
        ...content,
        'Hello! I`m ' + handleRandomString(names) + '. Can I help you?',
      ]);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.name}>In a Restaurant</p>
      <div className={styles.content}>
        {content.map((el, i) => {
          return (
            <div
              ref={elBlock}
              key={Math.random().toString(36).substring(2)}
              className={[
                i % 2 === 0 ? styles.smsBot : styles.smsMe,
                styles.sms,
              ].join(' ')}
            >
              <p>{el}</p>
            </div>
          );
        })}
        {content.length % 2 === 0 && (
          <div className={[styles.smsBot, styles.dots].join(' ')}>
            <p>{dots}</p>
          </div>
        )}
      </div>
      <div className={styles.input__message}>
        <input
          type="text"
          className={styles.message}
          placeholder="Write your message..."
          value={value}
          onChange={(e) => handleSetValue(e.target.value)}
          onKeyDown={(e) => handleSetMessage(e)}
        />
        <svg
          height="30px"
          width="35px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 334.5 334.5"
          onClick={handleSetContent}
        >
          <path
            d="M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481s1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1c-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25c1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073c1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z"
            fill="#C6C5C5"
          />
        </svg>
      </div>
    </div>
  );
}

export default FunnyStoryGame;
