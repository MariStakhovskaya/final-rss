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
        <div className="charts"></div>
      </div>
    </div>
  );
};

export default Admin;
