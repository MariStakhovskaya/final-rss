import styles from './Datatable.module.css';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const columns: GridColDef[] = [
  //{field: 'num', headerName: "№", width: 25, type: 'number'},
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'description', headerName: 'Description', width: 300 },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    sortable: true,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 100,
    sortable: true,
  },
  {
    field: 'personCount',
    headerName: 'Count of persons',
    type: 'number',
    width: 50,
    sortable: true,
  },
  {
    field: 'url',
    headerName: 'URL',
    width: 250,
  },
  {
    field: 'role1',
    headerName: 'Role1',
    width: 100,
  },
  {
    field: 'role2',
    headerName: 'Role2',
    width: 100,
  },
  {
    field: 'users',
    headerName: 'Users',
    width: 200,
  },
  {
    field: 'fullDescriptions',
    headerName: 'Full Descriptions',
    width: 350,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          <img
            src={params.row.img || ''}
            alt="avatar"
            className={styles.cellImg}
          />
          {params.row.valueGetter || ''}
        </div>
      );
    },
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: () => {
      return (
        <div className={styles.cellAction}>
          <Link to="">
            <div className={styles.viewButton}>Update</div>
          </Link>
          <div className={styles.deleteButton}>Delete</div>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    img: 'https://cdnn11.img.sputnik.by/img/07e5/0c/03/1058436946_0:0:1280:853_600x0_80_0_1_39d510c3debe434baf2d1bac16957e7b.jpg',
  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

type DataTableType = {
  title: string;
};

type StateMeetingType = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  personCount: number;
  url: string;
  role1: string;
  role2: string;
  users: string[];
  fullDescriptions: string;
};

const DataTable = ({ title }: DataTableType) => {
  const [data, setData] = useState(rows);
  const [page, setPage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const nowLocation = location.pathname.split('/');
    setPage(nowLocation[nowLocation.length - 1]);
  }, [page, location]);
  function goToPage() {
    navigate(`/admin/${page === 'allMeeting' ? 'newMeeting' : 'newUser'}`);
  }
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        {title}
        <button onClick={goToPage} className={styles.link}>
          Add New
        </button>
      </div>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
