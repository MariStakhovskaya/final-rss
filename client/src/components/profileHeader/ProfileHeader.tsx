import styles from './ProfileHeader.module.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function ProfileHeader() {
  return (
    <div className={styles.container}>
      {/* <nav>
        <ul>
          <li>
            <NavLink
              to={`login`}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`registration`}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <div>
        <Link to="/profile">
          <img src={logo} width="119px" height="114px" alt="logo" />
        </Link>
        <div className={styles.navigation}>
          <NavLink
            to="/profile"
            // className={({ isActive }) =>
            //   isActive ? `${styles.activeLink}` : ''
            // }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_98_857)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.79767 14.9903C2.39815 14.3286 2.3982 12.3373 3.79767 11.6756L18.9316 4.51925C19.6081 4.19931 20.3924 4.19931 21.0691 4.51925L36.2029 11.6756C37.4254 12.2536 37.5801 13.846 36.6669 14.6807V21.6663C36.6669 22.5868 35.9207 23.333 35.0002 23.333C34.0798 23.333 33.3336 22.5868 33.3336 21.6663V16.3472L31.6669 17.1353V23.333C31.6669 29.7763 26.4436 34.9997 20.0002 34.9997C13.5569 34.9997 8.33355 29.7763 8.33355 23.333V17.1352L3.79767 14.9903ZM28.3336 14.9996H28.3857L31.9102 13.333L20.0002 7.7011L8.0903 13.333L11.6149 14.9996H11.6669V15.0242L20.0002 18.9648L28.3336 15.0243V14.9996ZM18.9316 22.1467L11.6669 18.7115V23.333C11.6669 27.9353 15.3978 31.6663 20.0002 31.6663C24.6026 31.6663 28.3336 27.9353 28.3336 23.333V18.7115L21.0691 22.1467C20.3924 22.4667 19.6081 22.4667 18.9316 22.1467Z"
                  fill="#4A4A4A"
                />
              </g>
              <defs>
                <clipPath id="clip0_98_857">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
          <NavLink
            to="profile/meetings"
            className={({ isActive }) =>
              isActive ? `${styles.activeLink}` : ''
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_46_457)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6663 21.6667C13.4236 21.6667 14.8633 23.0264 14.9905 24.7512L14.9997 25V30C14.9997 31.7573 13.6399 33.1969 11.9151 33.3242L11.6663 33.3333H6.66634C4.90907 33.3333 3.4694 31.9736 3.34215 30.2488L3.33301 30V25C3.33301 23.2427 4.6928 21.8031 6.41757 21.6758L6.66634 21.6667H11.6663ZM26.6663 28.3333C27.5868 28.3333 28.333 29.0795 28.333 30C28.333 30.8548 27.6896 31.5592 26.8607 31.6555L26.6663 31.6667H19.9997C19.0792 31.6667 18.333 30.9205 18.333 30C18.333 29.1453 18.9764 28.4408 19.8053 28.3445L19.9997 28.3333H26.6663ZM11.6663 25H6.66634V30H11.6663V25ZM33.333 21.6667C34.2535 21.6667 34.9997 22.4128 34.9997 23.3333C34.9997 24.2538 34.2535 25 33.333 25H19.9997C19.0792 25 18.333 24.2538 18.333 23.3333C18.333 22.4128 19.0792 21.6667 19.9997 21.6667H33.333ZM11.6663 5C13.5073 5 14.9997 6.49238 14.9997 8.33333V13.3333C14.9997 15.1743 13.5073 16.6667 11.6663 16.6667H6.66634C4.82539 16.6667 3.33301 15.1743 3.33301 13.3333V8.33333C3.33301 6.49238 4.82539 5 6.66634 5H11.6663ZM26.6663 11.6667C27.5868 11.6667 28.333 12.4129 28.333 13.3333C28.333 14.1881 27.6896 14.8925 26.8607 14.9888L26.6663 15H19.9997C19.0792 15 18.333 14.2538 18.333 13.3333C18.333 12.4786 18.9764 11.7742 19.8053 11.6779L19.9997 11.6667H26.6663ZM11.6663 8.33333H6.66634V13.3333H11.6663V8.33333ZM33.333 5C34.2535 5 34.9997 5.7462 34.9997 6.66667C34.9997 7.52139 34.3563 8.22584 33.5274 8.32212L33.333 8.33333H19.9997C19.0792 8.33333 18.333 7.58713 18.333 6.66667C18.333 5.81195 18.9764 5.10749 19.8053 5.01121L19.9997 5H33.333Z"
                  fill="#4A4A4A"
                />
              </g>
              <defs>
                <clipPath id="clip0_46_457">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_26_29)">
              <path
                d="M19.9997 3.3335C29.2043 3.3335 36.6663 10.7954 36.6663 20.0002C36.6663 29.2048 29.2043 36.6668 19.9997 36.6668C16.8503 36.6668 13.9006 35.7918 11.3859 34.2708L6.33259 35.7572C5.05441 36.1332 3.86672 34.9455 4.24269 33.6672L5.72894 28.614C4.20809 26.0992 3.33301 23.1495 3.33301 20.0002C3.33301 10.7954 10.7949 3.3335 19.9997 3.3335ZM19.9997 6.66683C12.6359 6.66683 6.66634 12.6364 6.66634 20.0002C6.66634 22.6283 7.42501 25.0742 8.73464 27.1365C9.11249 27.7317 9.24221 28.4822 9.03021 29.203L8.29412 31.7057L10.7968 30.9697C11.5176 30.7577 12.2682 30.8873 12.8633 31.2652C14.9257 32.5748 17.3715 33.3335 19.9997 33.3335C27.3635 33.3335 33.333 27.364 33.333 20.0002C33.333 12.6364 27.3635 6.66683 19.9997 6.66683ZM14.1663 17.5002C15.5471 17.5002 16.6663 18.6195 16.6663 20.0002C16.6663 21.3808 15.5471 22.5002 14.1663 22.5002C12.7856 22.5002 11.6663 21.3808 11.6663 20.0002C11.6663 18.6195 12.7856 17.5002 14.1663 17.5002ZM25.833 17.5002C27.2137 17.5002 28.333 18.6195 28.333 20.0002C28.333 21.3808 27.2137 22.5002 25.833 22.5002C24.4523 22.5002 23.333 21.3808 23.333 20.0002C23.333 18.6195 24.4523 17.5002 25.833 17.5002Z"
                fill="#4A4A4A"
              />
            </g>
            <defs>
              <clipPath id="clip0_26_29">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_26_35)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.3917 4.68136C24.0065 4.23881 24.8737 4.03186 25.7265 4.34389C27.5553 5.01299 29.2328 5.99261 30.6957 7.21789C31.3908 7.80017 31.6452 8.65337 31.5697 9.40654C31.444 10.6613 31.6653 11.8728 32.2682 12.917C32.8043 13.8456 33.606 14.5792 34.5853 15.0948L34.9607 15.278C35.652 15.5896 36.2652 16.2381 36.4205 17.1338C36.5822 18.0662 36.6663 19.024 36.6663 20.0002C36.6663 20.9763 36.5822 21.9343 36.4205 22.8667C36.2807 23.6728 35.7701 24.2787 35.1653 24.619L34.9607 24.7225C33.8105 25.241 32.8713 26.0388 32.2682 27.0835C31.6653 28.1277 31.444 29.339 31.5697 30.5937C31.645 31.3468 31.3908 32.2 30.6957 32.7823C29.2328 34.0075 27.5553 34.9872 25.7267 35.6562C24.8738 35.9683 24.0067 35.7613 23.3918 35.3187C22.3673 34.5813 21.2065 34.1667 19.9997 34.1667C18.7928 34.1667 17.632 34.5813 16.6076 35.3187C15.9928 35.7613 15.1255 35.9683 14.2726 35.6562C12.4439 34.9872 10.7664 34.0075 9.30351 32.7822C8.60839 32.2 8.35416 31.3468 8.42957 30.5937C8.55521 29.339 8.33376 28.1277 7.73091 27.0835C7.19477 26.1549 6.39326 25.4213 5.41398 24.9056L5.03859 24.7225C4.34734 24.4108 3.73426 23.7623 3.57887 22.8667C3.41712 21.9343 3.33301 20.9763 3.33301 20.0002C3.33301 19.0238 3.41712 18.066 3.57886 17.1335C3.7187 16.3274 4.22928 15.7215 4.83392 15.3812L5.03857 15.2777C6.18874 14.7593 7.12776 13.9615 7.73091 12.9168C8.33377 11.8726 8.55522 10.6612 8.42957 9.40652C8.35414 8.65339 8.60837 7.80026 9.30351 7.21801C10.7664 5.99266 12.444 5.01301 14.2728 4.34389C15.1256 4.03184 15.9928 4.23881 16.6076 4.68136C17.632 5.41872 18.7928 5.83339 19.9997 5.83339C21.2065 5.83339 22.3673 5.41872 23.3917 4.68136ZM24.9858 7.62987C23.5432 8.57859 21.8418 9.16672 19.9997 9.16672C18.1575 9.16672 16.4561 8.57859 15.0135 7.62987C13.8451 8.10134 12.758 8.73404 11.78 9.50094C11.8796 11.2233 11.538 12.9894 10.6177 14.5835C9.69709 16.178 8.33792 17.357 6.79597 18.132C6.71059 18.7417 6.66634 19.3653 6.66634 20.0002C6.66634 20.635 6.71059 21.2585 6.79597 21.8683C8.33792 22.6433 9.69709 23.8223 10.6177 25.4168C11.538 27.0108 11.8796 28.7768 11.78 30.4992C12.758 31.2662 13.845 31.8988 15.0134 32.3703C16.456 31.4215 18.1575 30.8333 19.9997 30.8333C21.8418 30.8333 23.5433 31.4215 24.986 32.3703C26.1542 31.8988 27.2412 31.2662 28.2192 30.4993C28.1197 28.777 28.4612 27.0108 29.3815 25.4168C30.3022 23.8222 31.6613 22.6432 33.2033 21.8682C33.2888 21.2585 33.333 20.635 33.333 20.0002C33.333 19.3653 33.2888 18.7418 33.2033 18.1323C31.6613 17.3573 30.3022 16.1782 29.3815 14.5837C28.4612 12.9895 28.1195 11.2233 28.2192 9.50084C27.2412 8.73399 26.1542 8.10132 24.9858 7.62987ZM19.9997 13.3333C23.6815 13.3333 26.6663 16.3181 26.6663 20C26.6663 23.6818 23.6815 26.6667 19.9997 26.6667C16.3178 26.6667 13.333 23.6818 13.333 20C13.333 16.3181 16.3178 13.3333 19.9997 13.3333ZM19.9997 16.6667C18.1587 16.6667 16.6663 18.159 16.6663 20C16.6663 21.841 18.1587 23.3333 19.9997 23.3333C21.8407 23.3333 23.333 21.841 23.333 20C23.333 18.159 21.8407 16.6667 19.9997 16.6667Z"
                fill="#4A4A4A"
              />
            </g>
            <defs>
              <clipPath id="clip0_26_35">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default ProfileHeader;
