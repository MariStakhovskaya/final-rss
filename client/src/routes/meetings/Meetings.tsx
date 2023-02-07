import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { fetchMeeting } from '../../store/slice/meetingSlice';

function Meetings() {
  const dispatch = useDispatch<AppDispatch>();
  const { item } = useSelector((state: RootState) => state.meetings.meetings);

  useEffect(() => {
    dispatch(fetchMeeting());
  }, [dispatch]);

  return (
    <>
      <div>{item.map((el) => el.title)}</div>
    </>
  );
}

export default Meetings;
