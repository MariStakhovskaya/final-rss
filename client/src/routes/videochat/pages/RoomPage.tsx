import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { PeerState } from '../context/peerReducer';
import { RoomContext } from '../context/RoomContext';
import styles from './HomeVideo.module.css';

export const RoomPage = () => {
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
    console.log(id);
  }, [id, ws, me, stream]);

  return (
    <div className="roomPage">
      Room id {id}
      <div className={styles.roomPageContainer}>
        <VideoPlayer stream={stream} />

        {Object.values(peers as PeerState).map((peer, index) => (
          <VideoPlayer key={index} stream={peer.stream} />
        ))}
      </div>
    </div>
  );
};
