import React from 'react';
import DataTable from '../../../components/admins/datatable/Datatable';

type ListType = {
  title: string;
};

const List = ({ title }: ListType) => {
  return (
    <>
      <DataTable title={title} />
    </>
  );
};

export default List;
