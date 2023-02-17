import React from 'react';
import DataTable from '../../../components/admins/datatable/Datatable';
import Navbar from '../../../components/admins/navbar/Navbar';
import Sidebar from '../../../components/admins/sidebar/Sidebar';
import './list.scss';

type ListType = {
  title: string;
};

const List = ({ title }: ListType) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable title={title} />
      </div>
    </div>
  );
};

export default List;
