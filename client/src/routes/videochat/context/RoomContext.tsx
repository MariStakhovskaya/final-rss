import { createContext, useEffect, useState, useReducer } from 'react';
import socketIO from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import Peer from 'peerjs';
import { v4 as uuidV4 } from 'uuid';
import { addPeerAction, removePeerAction } from './PeerActions';
import { peerReducer } from './peerReducer';
//const WS = 'http://localhost:8000';
const WS = 'https://final-rss-server.onrender.com';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RoomContext = createContext<null | any>(null);
socketIO({ path: '/socket.io/', transports: ['websocket'] });
const ws = socketIO(WS);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RoomProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [me, setMe] = useState<Peer>();
  const [stream, setStream] = useState<MediaStream>();
  const [peers, dispatch] = useReducer(peerReducer, {});

  const enterRoom = ({ roomId }: { roomId: string }) => {
    navigate(`/meetingRoom/${roomId}`);
    console.log({ roomId });
  };
  const getUsers = ({ participants }: { participants: string[] }) => {
    console.log({ participants });
  };

  const removePeer = (peerId: string) => {
    dispatch(removePeerAction(peerId));
  };
  useEffect(() => {
    const savedId = localStorage.getItem('userId');
    const meId = savedId || uuidV4();

    const peer = new Peer(meId);
    setMe(peer);
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((streams) => {
          setStream(streams);
        });
    } catch (error) {
      console.log(error);
    }
    ws.on('room-created', enterRoom);
    ws.on('get-users', getUsers);
    ws.on('user-disconnected', removePeer);
  }, []);

  useEffect(() => {
    if (!me) return;
    if (!stream) return;

    ws.on('user-joined', ({ peerId }) => {
      const call = me.call(peerId, stream);
      call.on('stream', (peerStream) => {
        dispatch(addPeerAction(peerId, peerStream));
      });
    });

    me.on('call', (call) => {
      call.answer(stream);
      call.on('stream', (peerStream) => {
        dispatch(addPeerAction(call.peer, peerStream));
      });
    });
  }, [me, stream]);
  console.log({ peers });
  console.log(stream);
  return (
    <RoomContext.Provider value={{ ws, me, stream, peers }}>
      {children}
    </RoomContext.Provider>
  );
};
