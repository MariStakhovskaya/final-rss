import styles from './Featured.module.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

const Featured = () => {
  const percentage = 66;
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <p className={styles.title}>Total meeting</p>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={3}
          />
        </div>
        <p className={styles.title}>All meeting made today</p>
        <p className={styles.amount}>125</p>
        <p className={styles.desc}>Какое-то описание</p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={styles.itemResult}>
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className={styles.resultAmount}>12</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={styles.itemResult}>
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className={styles.resultAmount}>12</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={styles.itemResult}>
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className={styles.resultAmount}>12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
