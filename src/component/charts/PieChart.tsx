import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type RevenueData = {
  [key: string]: number;
};

type RevenuePieChartProps = {
  data: RevenueData;
};

const PieChart = ({ data }: RevenuePieChartProps) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        formatter: (_value: number, context: any) => {
          return context.chart.data.labels[context.dataIndex];
        },
        anchor: "center" as const,
        align: "center" as const,
        clip: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-full">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
