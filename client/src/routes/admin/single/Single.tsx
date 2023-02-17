import './single.scss';
import Sidebar from '../../../components/admins/sidebar/Sidebar';
import Navbar from '../../../components/admins/navbar/Navbar';
import Chart from '../../../components/admins/chart/Chart';
import List from '../../../components/admins/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <p className="title">Information</p>
            <div className="item">
              <img
                src="https://avatars.mds.yandex.net/i?id=2af1e29d2c1841ad04aca51f9f1c256c9c2b7f8c-7096437-images-thumbs&n=13"
                alt="Avatar"
                className="itemImg"
              />
              <div className="details">
                <p className="itemTitle">Jone Snow</p>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">ylv@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">8774936</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <p className="title">Last Game Result</p>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
