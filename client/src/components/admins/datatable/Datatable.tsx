import styles from './Datatable.module.css';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  MeetingType,
  UserMeetingType,
} from '../../../store/slice/meetingSlice';
import { deleteUser, UserType } from '../../../store/slice/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

/* export type MeetingType = {
  _id: string;
  title?: string;
  description: string;
  fulldescriptions: string;
  date: string;
  time: string;
  personCount: number;
  url: string;
  role: RoleType[];
  users: Array<UserMeetingType>;
  __v: number;
}; */

type DataTableType = {
  title: string;
  dataUser: UserType[];
  dataMeeting: MeetingType[];
};

const DataTable = ({ title, dataUser, dataMeeting }: DataTableType) => {
  const dispatch = useDispatch<AppDispatch>();

  function getMeetingsTitle(userId: string) {
    const arrTitle: string[] = [];
    dataMeeting.forEach((elem) => {
      elem.users.forEach((user) => {
        if (user.id === userId && !arrTitle.includes(elem.title)) {
          arrTitle.push(elem.title);
        }
      });
    });
    return arrTitle.join(', ');
  }

  function getRole(userId: string) {
    const arrRole: string[] = [];
    dataMeeting.forEach((elem) => {
      elem.users.forEach((user) => {
        if (user.id === userId && !arrRole.includes(user.role)) {
          arrRole.push(user.role);
        }
      });
    });
    return arrRole.join(', ');
  }

  function createRows() {
    let newRow;
    if (title === 'All Users') {
      newRow = dataUser.map((elem: UserType) => {
        return {
          id: elem._id,
          email: elem.email,
          name: elem.name,
          meetings: getMeetingsTitle(elem._id),
          role: getRole(elem._id),
        };
      });
    } else {
      newRow = dataMeeting.map((elem: MeetingType) => {
        return {
          date: elem.date,
          time: elem.time,
          id: elem._id,
          title: elem.title,
          personCount: elem.personCount,
          usersId: elem.users.map((elemUser) => ' ' + elemUser.id),
        };
      });
    }
    return newRow;
  }

  /*  const [rowsUser, setRowsUser] = useState(createRowsUser());
  const [rowsMeetings, setRowsMeetings] = useState(createRowsMeetings()); */

  const [rows, setRows] = useState(createRows());

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

  useEffect(() => {
    setRows(createRows());

    /* if (title === 'All Users') {
      setRowsUser(createRowsUser());
    } else {
      setRowsMeetings(createRowsMeetings());
    } */
  }, [title]);

  const columnsUser: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150, sortable: true },
    { field: 'email', headerName: 'Email', width: 200, sortable: true },
    { field: 'name', headerName: 'Name', width: 200, sortable: true },
    {
      field: 'meetings',
      headerName: 'Meetings Title',
      width: 300,
      sortable: true,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 200,
    },
    /* 
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
    }, */
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link to={`/admin/user/:${params.id}`}>
              <div className={styles.viewButton}>Update</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDeleteUser(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  async function handleDeleteUser(id: string) {
    const deleteRows: any[] = []; //Не могу пока избавиться от any!!!!!
    rows.map((elem) => {
      if (elem.id !== id) {
        deleteRows.push(elem);
      }
    });
    try {
      //await deleteUser({userId: id});
      setRows(deleteRows);
    } catch (err) {
      console.log(err);
    }
  }

  const columnsMeetings: GridColDef[] = [
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
    { field: 'id', headerName: 'ID', width: 150, sortable: true },
    { field: 'title', headerName: 'Title', width: 200, sortable: true },
    {
      field: 'personCount',
      headerName: 'Count of persons',
      type: 'number',
      width: 50,
      sortable: true,
    },
    {
      field: 'usersId',
      headerName: 'Users ID',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link to={`/admin/meeting/:${params.id}`}>
              <div className={styles.viewButton}>Update</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDeleteMeetings(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  async function handleDeleteMeetings(id: string) {
    const deleteRows: any[] = []; //Не могу пока избавиться от any!!!!!
    rows.map((elem) => {
      if (elem.id !== id) {
        deleteRows.push(elem);
      }
    });
    try {
      //await deleteMeetings({userId: id});
      setRows(deleteRows);
    } catch (err) {
      console.log(err);
    }
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
        rows={rows}
        columns={title === 'All Users' ? columnsUser : columnsMeetings}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
