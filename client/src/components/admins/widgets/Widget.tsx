import styles from './Widget.module.css';
import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type WidgetType = {
  type: string;
  count: number;
};

interface IWidget {
  title: string;
  link: string;
  icon: ReactElement;
  counter: number;
}

const Widget = ({ type, count }: WidgetType) => {
  const iconStyle = `material-symbols-outlined ${styles.icon}`;
  const [data, setData] = useState<IWidget>();

  useEffect(() => {
    switch (type) {
      case 'user':
        setData({
          ...data,
          title: 'USERS',
          link: 'See all users',
          icon: (
            <span
              className={iconStyle}
              style={{
                backgroundColor: 'rgba(218, 165, 32, 0.2)',
                color: 'goldenrod',
              }}
            >
              account_box
            </span>
          ),
          counter: count,
        });
        break;
      case 'meeting':
        setData({
          ...data,
          title: 'MEETINGS',
          link: 'See all meetings',
          icon: (
            <span
              className={iconStyle}
              style={{
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                color: 'green',
              }}
            >
              meeting_room
            </span>
          ),
          counter: count,
        });
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{data?.title}</span>
        <span className={styles.counter}>{data?.counter}</span>
        <Link
          to={data?.title === 'USERS' ? '/admin/allUsers' : '/admin/allMeeting'}
        >
          <span className={styles.link}>{data?.link}</span>
        </Link>
      </div>
      <div className={styles.right}>
        <>
          {/*  <div className="percentage positive">
            <ArrowDropUpOutlinedIcon />
            20%
          </div> */}
          {data?.icon}
        </>
      </div>
    </div>
  );
};

export default Widget;
