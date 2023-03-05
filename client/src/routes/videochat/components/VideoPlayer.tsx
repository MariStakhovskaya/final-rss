import { useEffect, useRef } from 'react';
import styles from './VideoPlayer.module.css';

export const VideoPlayer = ({ stream }: { stream: MediaStream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream;
  }, [stream]);
  return <video ref={videoRef} autoPlay className={styles.videoBox} />;
};
