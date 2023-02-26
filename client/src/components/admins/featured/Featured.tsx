import styles from './Featured.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MeetingType } from '../../../store/slice/meetingSlice';
import { useEffect, useState } from 'react';

type FeaturedDataType = {
  allMeetings: MeetingType[];
};

const Featured = ({ allMeetings }: FeaturedDataType) => {
  const percentage = 66;
  const [todayMeetings, setTodayMeetings] = useState(0);
  const [meetingsSummary, setMeetingsSummary] = useState({
    pastData: 0,
    comingData: 0,
  });
  const today = new Date().toLocaleDateString();
  console.log(today);

  function findSummary() {
    let past = 0;
    let coming = 0;
    const todayArr = today.split('.');
    allMeetings.forEach((elem) => {
      const elemDate = elem.date.split('.');
      if (
        (todayArr[0] > elemDate[0] &&
          todayArr[1] >= elemDate[1] &&
          todayArr[2] >= elemDate[2]) ||
        (todayArr[0] < elemDate[0] &&
          todayArr[1] > elemDate[1] &&
          todayArr[2] >= elemDate[2])
      ) {
        past += 1;
      }
      if (
        (todayArr[0] > elemDate[0] &&
          todayArr[1] < elemDate[1] &&
          todayArr[2] <= elemDate[2]) ||
        (todayArr[0] < elemDate[0] &&
          todayArr[1] == elemDate[1] &&
          todayArr[2] <= elemDate[2])
      ) {
        coming += 1;
      }
    });
    return {
      pastData: past,
      comingData: coming,
    };
  }
  function findTotalMeetings() {
    let countTotal = 0;
    allMeetings.forEach((elem) => {
      if (elem.date === today) {
        countTotal += 1;
      }
    });
    return countTotal;
  }
  useEffect(() => {
    setTodayMeetings(findTotalMeetings());
  }, [allMeetings]);
  useEffect(() => {
    setMeetingsSummary(findSummary());
  }, [allMeetings]);
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <p className={styles.title}>Total meeting</p>
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
        <p className={styles.amount}>{todayMeetings}</p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Past</div>
            <div className={styles.itemResult}>
              <div className={styles.resultAmount}>
                {meetingsSummary.pastData}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Coming</div>
            <div className={styles.itemResult}>
              <div className={styles.resultAmount}>
                {meetingsSummary.comingData}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
