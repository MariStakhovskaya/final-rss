import React from 'react';
import DataTable from '../../../components/admins/datatable/Datatable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchMeeting } from '../../../store/slice/meetingSlice';
import { Preloader } from '../../../components/custom/preloader/Preloader';
import { getAllUsers } from '../../../store/slice/userSlice';

type ListType = {
  title: string;
};

const List = ({ title }: ListType) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMeeting());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { item } = useSelector((state: RootState) => state.meetings.meetings);
  const users = useSelector((state: RootState) => state.user.users);
  const isLoadingMeeting = useSelector(
    (state: RootState) => state.meetings.meetings.status
  );
  const isLoadingUser = useSelector((state: RootState) => state.user.status);
  return (
    <>
      {isLoadingMeeting === 'loading' || isLoadingUser === 'loading' ? (
        <Preloader />
      ) : (
        <DataTable title={title} dataUser={users} dataMeeting={item} />
      )}
    </>
  );
};

export default List;
