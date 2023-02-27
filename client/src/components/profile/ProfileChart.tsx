import styles from '../admins/chart/Chart.module.css';
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

type DataChartType = {
  name: number;
  Total: number;
};

type ElemType = {
  resultLives: number;
  resultCounter: number;
  resultTime: string;
};

const ProfileChart = () => {
  const resultGame = localStorage.getItem('carsGame');
  const dataResult = JSON.parse(resultGame!);

  const [dataChart, setDataChart] = useState<DataChartType[]>([
    { name: 0, Total: 10 },
  ]);

  function createDataChart() {
    const newData = dataResult?.map((elem: ElemType) => {
      console.log(elem);
      return {
        name: elem.resultTime,
        Total: elem.resultCounter,
      };
    });
    return newData;
  }
  createDataChart();
  useEffect(() => {
    setDataChart(createDataChart());
    console.log(dataChart);
  }, [resultGame]);

  return (
    <div className={styles.chart}>
      {resultGame!.length <= 0 ? (
        <h2>No results</h2>
      ) : (
        <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
          <AreaChart
            width={400}
            height={250}
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
      )}
    </div>
  );
};

export default ProfileChart;
