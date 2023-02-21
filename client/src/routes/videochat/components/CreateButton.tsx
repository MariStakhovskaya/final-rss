import { useContext } from 'react';
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
    <div className="button">
      <button onClick={createRoom} disabled={disabled}>
        Start {title}
      </button>
    </div>
  );
}

export default CreateButton;
