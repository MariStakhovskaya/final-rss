import React, { ReactElement, useEffect, useState } from 'react';
import './widget.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
              className="material-symbols-outlined icon"
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
              className="material-symbols-outlined icon"
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
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.counter}</span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <>
          <div className="percentage positive">
            <ArrowDropUpOutlinedIcon />
            20%
          </div>
          {data?.icon}
        </>
      </div>
    </div>
  );
};

export default Widget;
