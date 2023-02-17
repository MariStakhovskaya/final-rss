import React from 'react';
import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

const Featured = () => {
  const percentage = 66;
  return (
    <div className="featured">
      <div className="top">
        <p className="title">Total meeting</p>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={3}
          />
        </div>
        <p className="title">All meeting made today</p>
        <p className="amount">125</p>
        <p className="desc">Какое-то описание</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <ArrowDropDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
