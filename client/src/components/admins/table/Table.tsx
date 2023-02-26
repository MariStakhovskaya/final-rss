import styles from './Table.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserType } from '../../../store/slice/userSlice';
import { useEffect, useState } from 'react';

type ListTYpe = {
  allUsers: UserType[];
};

type UserTypeList = {
  id: string;
  name: string;
  email: string;
  date: string;
};

const List = ({ allUsers }: ListTYpe) => {
  const [rows, setRows] = useState<UserType[]>([
    {
      _id: '1111111',
      name: 'Admin',
      email: 'admin@me.me',
      createdAt: '24 February',
    },
  ]);
  function createRow() {
    const latestUsersWithoutUndefined = allUsers.filter((elem) => {
      if (elem.createdAt) {
        return elem;
      }
    });
    const latestUsers = latestUsersWithoutUndefined.sort(function (a, b) {
      const dateA = Date.parse(a.createdAt),
        dateB = Date.parse(b.createdAt);
      return dateB - dateA;
    });
    return latestUsers.length < 5 ? latestUsers : latestUsers.slice(0, 5);
  }
  useEffect(() => {
    setRows(createRow());
  }, [allUsers]);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Users ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Registration date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{`${new Date(
                row.createdAt
              ).toDateString()}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
