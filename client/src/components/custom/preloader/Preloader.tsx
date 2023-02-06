import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner} />
    </div>
  );
};
