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
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCellHeader}>
              Tracking ID
            </TableCell>
            <TableCell className={styles.tableCellHeader}>Product</TableCell>
            <TableCell className={styles.tableCellHeader}>Customer</TableCell>
            <TableCell className={styles.tableCellHeader}>Date</TableCell>
            <TableCell className={styles.tableCellHeader}>Amount</TableCell>
            <TableCell className={styles.tableCellHeader}>
              Payment Method
            </TableCell>
            <TableCell className={styles.tableCellHeader}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={styles.tableCell}>{row.id}</TableCell>
              <TableCell className={styles.tableCell}>
                <div className={styles.cellWrapper}>
                  <img src={row.img} alt="" className={styles.image} />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={styles.tableCell}>{row.customer}</TableCell>
              <TableCell className={styles.tableCell}>{row.date}</TableCell>
              <TableCell className={styles.tableCell}>{row.amount}</TableCell>
              <TableCell className={styles.tableCell}>{row.method}</TableCell>
              <TableCell className={styles.tableCell}>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
