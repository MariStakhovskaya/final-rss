import { createRef, useEffect, useState } from 'react';
import Button from '../../components/custom/button/Button';
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
  how,
} from '../../data';
import styles from './FunnyStoryGame.module.css';

function FunnyStoryGame() {
  const handleRandomString = (mass: string[]): string => {
    const r = Math.floor(Math.random() * mass.length);

    return mass[r];
  };

  const generateAnswer = (mass: string[]): void => {
    const answer = handleRandomString(mass);
    const question = handleRandomString(quastions);
    let questionWord = question.split(' ')[0];

    if (questionWord === 'Would') questionWord = 'Yes/No';

    if (answer[answer.length - 1] === '?')
      setContent([...content, `${answer} (Yes/No)`]);
    else
      setContent([...content, answer + '. ' + question + ` (${questionWord})`]);
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
            case 'how':
              generateAnswer(how);
              break;
            default:
              setContent([...content, handleRandomString(defaultAnswer)]);
              break;
          }
        }, 3000);
      } else
        setTimeout(
          () => setContent([...content, handleRandomString(defaultAnswer)]),
          3000
        );
    }
  }, [content]);

  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  const handlePopUp = () => {
    if (openPopUp) setOpenPopUp(false);
    else setOpenPopUp(true);
  };

  const [openStory, setOpenStory] = useState<boolean>(false);

  const handleStory = () => {
    if (openStory) setOpenStory(false);
    else setOpenStory(true);
  };

  useEffect((): void => {
    if (content.length === 0) {
      setTimeout(() => {
        setContent([
          ...content,
          'Hello! I`m ' + handleRandomString(names) + '. Can I help you? (Can)',
        ]);
        console.log('edcfs');
      }, 3000);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={openPopUp ? styles.popup__open : styles.popup__close}>
        <div>
          <div className={styles.cross} onClick={handlePopUp}></div>
          <p>Rules</p>
          <ul>
            <li>
              You must communicate with the bot in the style of
              "answer-question".
            </li>
            <li>
              "Answer" is your answer to the question of the bot indicated in
              brackets after this question; "question" is the question you want
              to ask the bot to continue the game.
            </li>
            <li>
              After your question you must write in parentheses a question word
              of your question (for example, (Where?)).
            </li>
            <li>
              Possible variants of the question word that the bot responds to
              are indicated under the input "Write your message".
            </li>
            <li>The bot will answer your question with a random answer.</li>
            <li>At the end of the game, click on the "View dialog" button.</li>
          </ul>
        </div>
      </div>
      <div className={openStory ? styles.story__open : styles.story__close}>
        <div>
          <div className={styles.cross} onClick={handleStory}></div>
          <div>
            {content.map((el) => {
              return (
                <div key={Math.random().toString(36).substring(2)}>
                  {el.match(/\(.+\)/) ? (
                    <p>
                      -{' '}
                      {el
                        .split(' ')
                        .slice(0, el.split(' ').length - 1)
                        .join(' ')}
                    </p>
                  ) : (
                    <p>- {el}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.chat}>
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
                {i % 2 === 0 && el.match(/\(.+\)/) ? (
                  <div className={styles.bot__answer__parts}>
                    <p className={styles.bot__answer}>
                      {el
                        .split(' ')
                        .slice(0, el.split(' ').length - 1)
                        .join(' ')}
                    </p>
                    <p>
                      {el
                        .split(' ')
                        .slice(el.split(' ').length - 1, el.split(' ').length)
                        .join(' ')}
                    </p>
                  </div>
                ) : (
                  <p>{el}</p>
                )}
              </div>
            );
          })}
          {content.length % 2 === 0 && (
            <div className={[styles.smsBot, styles.dots].join(' ')}>
              <p>{dots}</p>
            </div>
          )}
        </div>
        <div className={styles.typing}>
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
            <div className={styles.view__button}>
              <Button name="View story" callback={handleStory} />
            </div>
          </div>
          <div>
            <p className={styles.questionWords}>
              <span>All possible variants of question words</span>: where, why,
              when, what, can, how much time, how much money, how, want.
            </p>
          </div>
        </div>
        <div className={styles.quastion}>
          <p onClick={handlePopUp}>?</p>
        </div>
      </div>
    </div>
  );
}

export default FunnyStoryGame;
