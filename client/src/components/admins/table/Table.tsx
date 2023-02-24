import styles from './Table.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserType } from '../../../store/slice/userSlice';
import { useState } from 'react';

type ListTYpe = {
  allUsers?: UserType[];
};

type UserTypeList = {
  id: string;
  name: string;
  email: string;
  date: string;
};

const List = ({ allUsers }: ListTYpe) => {
  const [rows, setRows] = useState<UserTypeList[]>([
    {
      id: '1143155',
      name: 'Acer Nitro 5',
      email: 'John Smith',
      date: '1 March',
    },
  ]);
  function createRow() {
    console.log(allUsers);
    const latestUsers = allUsers?.filter((elem) => {});
  }
  /*  const rows = [
    {
      id: 1143155,
      name: 'Acer Nitro 5',
      email: 'John Smith',
      date: '1 March',
    },
  ]; */
  console.log(createRow());
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
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
