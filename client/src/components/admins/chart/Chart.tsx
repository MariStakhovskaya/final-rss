import styles from './Chart.module.css';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useEffect, useState } from 'react';
import { UserType } from '../../../store/slice/userSlice';

type DataChartType = {
  name: string;
  Total: number;
};

type ChartType = {
  aspect: number;
  title: string;
  allUsers: UserType[];
};
const Chart = ({ aspect, title, allUsers }: ChartType) => {
  const [dataChart, setDataChart] = useState<DataChartType[]>([
    { name: 'January', Total: 0 },
    { name: 'February', Total: 0 },
    { name: 'March', Total: 0 },
  ]);
  function createDataChart() {
    const allMonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const newData: DataChartType[] = [];
    const newCount = allMonth.map((elem, index) => {
      let count = 0;
      allUsers.forEach((elemUser) => {
        if (index === new Date(elemUser.createdAt).getMonth()) {
          count = count + 1;
        }
      });
      return count;
    });
    newCount.forEach((elem, index, arr) => {
      if (index == 0) {
        newData.push({
          name: allMonth[index],
          Total: elem,
        });
      }
      if (elem !== 0) {
        newData.push({
          name: allMonth[index],
          Total: elem,
        });
      }
    });
    return newData;
  }
  useEffect(() => {
    setDataChart(createDataChart());
  }, [allUsers]);
  return (
    <div className={styles.chart}>
      <div className={styles.title}>{title}</div>
      <ResponsiveContainer width="100%" height="300px" aspect={aspect}>
        <AreaChart
          width={530}
          height={1}
          data={dataChart}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className={styles.chartGrid} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
