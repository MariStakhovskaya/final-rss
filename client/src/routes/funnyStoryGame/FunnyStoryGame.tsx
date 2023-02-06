import styles from './FunnyStoryGame.module.css';

function funnyStoryGame() {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Receptionist</p>
      <div className={styles.content}>
        <p>djwoekfm</p>
      </div>
      <div className={styles.input__message}>
        <input
          type="text"
          className={styles.message}
          placeholder="Write your message..."
        />
        <svg
          height="30px"
          width="35px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 334.5 334.5"
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

export default funnyStoryGame;
