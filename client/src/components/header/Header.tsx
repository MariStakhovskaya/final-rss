import styles from './Header.module.css';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
// import logoDark from '../../images/logo-black.jpg';
import logo from '../../images/logo_clear.png';
import { useSelector } from 'react-redux';
import { setIsAuth } from '../../store/slice/authSlice';
import ProfileHeader from '../profileHeader/ProfileHeader';

type HeaderType = {
  theme: string;
};

function Header({ theme }: HeaderType) {
  const isAuth = useSelector(setIsAuth);
  return (
    <div className={styles.container}>
      {isAuth ? (
        <ProfileHeader theme={theme} />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <Link to="/">
              {/* <img src={theme === 'light' ? logo : logoDark} alt="logo" /> */}
              <img src={logo} alt="logo" />
            </Link>
            <div className={styles.navigation}>
              <svg
                viewBox="0 0 33 33"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => (window.location.href = 'tel: +375331234567')}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4245 22.5778C16.7813 28.9331 22.6703 29.629 24.3987 29.6926C26.4888 29.7694 28.6207 28.0639 29.542 26.316C28.0716 24.5906 26.1562 23.2524 24.0576 21.8015C22.8207 23.0381 21.2954 25.3356 19.2627 24.5136C18.1084 24.0469 15.2552 22.7333 12.7621 20.2409C10.2689 17.7482 8.95507 14.8956 8.48829 13.7418C7.66545 11.7078 9.96863 10.1801 11.2064 8.94256C9.75592 6.80968 8.43945 4.84585 6.71728 3.44951C4.94633 4.37572 3.2303 6.49096 3.30817 8.60687C3.37178 10.3348 4.06781 16.2226 10.4245 22.5778ZM24.2771 32.9953C21.8954 32.9077 15.1504 31.9767 8.08698 24.9148C1.0235 17.853 0.0922588 11.1096 0.00462205 8.72842C-0.128932 5.10039 2.65091 1.57526 5.8635 0.198762C6.61733 -0.124239 7.53037 -0.0651281 8.25216 0.461247C10.9094 2.3991 12.7427 5.33686 14.3172 7.63716C14.9879 8.6172 14.8772 9.9467 14.0256 10.7981L11.7836 13.0395C12.3039 14.1885 13.3655 16.1701 15.0997 17.9037C16.8337 19.6375 18.8157 20.6988 19.965 21.2191L22.2058 18.9787C23.0582 18.1266 24.3938 18.0143 25.3762 18.6948C27.7234 20.3205 30.4799 22.1275 32.4898 24.701C33.0543 25.4238 33.1383 26.369 32.8016 27.1547C31.4184 30.3814 27.9182 33.1293 24.2771 32.9953Z"
                  fill="#C6C5C5"
                />
              </svg>
              <svg
                viewBox="0 0 33 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  (window.location.href = 'mailto: lernberg@gmail.com')
                }
              >
                <path
                  d="M29.7 0C31.4397 0 32.865 1.37679 32.9909 3.12312L33 3.375V23.625C33 25.4043 31.6538 26.8619 29.9463 26.9907L29.7 27H3.3C1.5603 27 0.135028 25.6233 0.00905153 23.8769L0 23.625V3.375C0 1.59576 1.3462 0.138096 3.05372 0.00925684L3.3 0H29.7ZM29.7 5.76153L18.25 17.4717C17.2834 18.4602 15.7164 18.4602 14.7498 17.4717L3.3 5.76153V23.625H29.7V5.76153ZM27.3666 3.375H5.63325L16.5 14.4887L27.3666 3.375Z"
                  fill="#C6C5C5"
                />
              </svg>
              <svg
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send/?phone=375331234567',
                    '_blank'
                  )
                }
              >
                <path
                  d="M16.5 0C25.6126 0 33 7.3873 33 16.5C33 25.6126 25.6126 33 16.5 33C13.59 33 10.8522 32.2454 8.47592 30.9205L7.97232 30.628L2.96959 32.0994C1.76444 32.4539 0.640564 31.4043 0.857787 30.2104L0.900586 30.0303L2.37197 25.0277C0.866333 22.538 0 19.6178 0 16.5C0 7.3873 7.3873 0 16.5 0ZM16.5 3.3C9.20984 3.3 3.3 9.20984 3.3 16.5C3.3 19.1019 4.05108 21.5233 5.34762 23.565C5.67493 24.0805 5.81417 24.7138 5.70326 25.3422L5.64023 25.6108L4.91151 28.0884L7.38915 27.3598C8.10274 27.1499 8.84588 27.2783 9.43498 27.6524C11.4768 28.9489 13.8981 29.7 16.5 29.7C23.7902 29.7 29.7 23.7902 29.7 16.5C29.7 9.20984 23.7902 3.3 16.5 3.3ZM11.7177 8.55373C12.0738 8.40111 12.5052 8.42903 12.8462 8.67778C13.6785 9.28491 14.3393 10.0993 14.9068 10.8957L15.446 11.6778C15.5317 11.8044 15.6155 11.9284 15.6978 12.0488C15.9989 12.4892 15.9642 13.0744 15.623 13.4738L15.498 13.5996L13.9743 14.7312C13.8234 14.8434 13.773 15.0472 13.8636 15.2122C14.2085 15.8397 14.8226 16.7734 15.5253 17.4761C16.2289 18.1797 17.2069 18.8336 17.8774 19.2171C18.0223 19.3 18.1984 19.2738 18.3167 19.1659L18.38 19.0915L19.3713 17.5816C19.7513 17.0758 20.4612 16.9653 20.9771 17.3224L21.8728 17.9468C22.7629 18.582 23.6198 19.2649 24.2971 20.1323C24.5639 20.474 24.6035 20.9207 24.4444 21.2919C23.791 22.8167 22.1372 24.1152 20.4171 24.0519L20.1555 24.0368L19.8388 24.0054C19.7817 23.9986 19.7224 23.9908 19.661 23.9821L19.2688 23.9171C17.7447 23.6293 15.2998 22.7651 12.7681 20.2335C10.2365 17.7018 9.37227 15.2568 9.08446 13.7327L9.01943 13.3405L8.97808 12.9977L8.95547 12.7081C8.953 12.6645 8.95109 12.6233 8.94967 12.5845C8.88627 10.8619 10.1919 9.20766 11.7177 8.55373Z"
                  fill="#C6C5C5"
                />
              </svg>
              <svg
                viewBox="0 0 34 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  window.open('https://telegram.me/lernberg', '_blank')
                }
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.9646 2.94956C34.2896 0.98267 32.3168 -0.570877 30.4766 0.202697L1.55154 12.3621C-0.465432 13.2099 -0.568782 16.121 1.55298 16.9991C3.12282 17.6488 5.52538 18.6014 7.93495 19.3946C9.91141 20.0451 12.066 20.649 13.7921 20.8199C14.2646 21.3843 14.8593 21.9264 15.4635 22.4224C16.3888 23.1822 17.503 23.966 18.653 24.7163C20.9562 26.2188 23.5117 27.6564 25.2341 28.5905C27.2925 29.7067 29.7567 28.4214 30.1268 26.1814L33.9646 2.94956ZM4.79553 14.663L30.3773 3.90912L26.7952 25.5934C25.1063 24.6764 22.6715 23.3031 20.5035 21.8889C19.4068 21.1732 18.4051 20.4646 17.6123 19.8138C17.3299 19.5819 17.0909 19.3708 16.8918 19.1818L23.592 12.4923C24.2526 11.8328 24.2526 10.7635 23.592 10.104C22.9315 9.44453 21.8604 9.44453 21.1999 10.104L13.8618 17.4303C12.6212 17.2718 10.8917 16.8115 8.99423 16.187C7.53393 15.7062 6.06566 15.1602 4.79553 14.663Z"
                  fill="#C6C5C5"
                />
              </svg>
            </div>
          </div>
          <p>Privacy</p>
        </div>
      )}
    </div>
  );
}

export default Header;
