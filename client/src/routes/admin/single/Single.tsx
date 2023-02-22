import styles from './Single.module.css';
import Chart from '../../../components/admins/chart/Chart';
import List from '../../../components/admins/table/Table';

const Single = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.editButton}>Edit</div>
          <p className={styles.title}>Information</p>
          <div className={styles.item}>
            <img
              src="https://avatars.mds.yandex.net/i?id=2af1e29d2c1841ad04aca51f9f1c256c9c2b7f8c-7096437-images-thumbs&n=13"
              alt="Avatar"
              className={styles.itemImg}
            />
            <div className={styles.details}>
              <p className={styles.itemTitle}>Jone Snow</p>
              <div className={styles.detailItem}>
                <span className={styles.itemKey}>Email:</span>
                <span className={styles.itemValue}>ylv@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.itemKey}>Phone:</span>
                <span className={styles.itemValue}>8774936</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.title}>Last Game Result</p>
        <List />
      </div>
    </>
  );
};

export default Single;
