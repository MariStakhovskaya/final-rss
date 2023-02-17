import styles from './Meeting.module.css';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

type MeetingType = {
  _id: string;
  title: string;
  description: string;
  personCount: number;
  time: string;
  date: string;
  url: string;
  __v: number;
};

type MeetingPropsType = {
  meeting: MeetingType;
};

function Meeting(props: MeetingPropsType) {
  return (
    <div className={styles.containerMeeting}>
      <div className={styles.title}>{props.meeting.title}</div>
      <div>
        <img
          className={styles.imgMeeting}
          src={props.meeting.url}
          alt="meeting"
        />
      </div>
      <div>{props.meeting.personCount}</div>
      <div className={styles.description}>{props.meeting.description}</div>
      <div>
        <Link
          key={props.meeting._id}
          to={`/profile/meetings/${props.meeting._id}`}
        >
          <button className={styles.btnMeeting}>
            <span className={styles.btnName}>{props.meeting.date}</span>
            <span className={styles.btnName}>{props.meeting.time}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Meeting;
