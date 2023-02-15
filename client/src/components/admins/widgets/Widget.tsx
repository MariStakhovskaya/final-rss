import React, { ReactElement, useEffect, useState } from 'react';
import './widget.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type WidgetType = {
  type: string;
};

interface IWidget {
  title: string;
  link: string;
  icon: ReactElement<any, any>;
  counter: number;
}

const Widget = ({ type }: WidgetType) => {
  const [data, setData] = useState<IWidget>();

  useEffect(() => {
    switch (type) {
      case 'user':
        setData({
          ...data,
          title: 'USERS',
          link: 'See all users',
          icon: (
            <AccountBoxIcon
              className="icon"
              style={{
                backgroundColor: 'rgba(218, 165, 32, 0.2)',
                color: 'goldenrod',
              }}
            />
          ),
          counter: 100,
        });
        break;
      case 'meeting':
        setData({
          ...data,
          title: 'MEETINGS',
          link: 'See all meetings',
          icon: (
            <MeetingRoomIcon
              className="icon"
              style={{
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                color: 'green',
              }}
            />
          ),
          counter: 100,
        });
        break;
      default:
        break;
    }
  }, [data]);
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.counter}</span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpOutlinedIcon />
          20%
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
