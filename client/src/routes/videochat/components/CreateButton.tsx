import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';

type PropsType = {
  title: string;
  disabled: boolean;
};

function CreateButton({ title, disabled }: PropsType) {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit('create-room');
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
