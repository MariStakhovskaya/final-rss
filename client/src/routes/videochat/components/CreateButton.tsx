import { useContext } from 'react';
import Button from '../../../components/custom/button/Button';
import { RoomContext } from '../context/RoomContext';

type PropsType = {
  title: string;
  disabled: boolean;
  idRoom: string;
};

function CreateButton({ title, disabled, idRoom }: PropsType) {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit('create-room', idRoom);
  };
  return (
    <Button name="Start meeting" callback={createRoom} disabled={disabled} />
    // <button onClick={createRoom} disabled={disabled}>
    //   Start {title}
    // </button>
  );
}

export default CreateButton;
