import Chart from '../../components/admins/chart/Chart';
import Featured from '../../components/admins/featured/Featured';
import Navbar from '../../components/admins/navbar/Navbar';
import Sidebar from '../../components/admins/sidebar/Sidebar';
import Widget from '../../components/admins/widgets/Widget';
import './admin.scss';

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="meeting" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Users</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
