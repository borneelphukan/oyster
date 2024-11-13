// pages/dashboards/dashboard.tsx

import MetricCard from "../../component/card/MetricCard";
import PieChart from "../../component/charts/PieChart";
import NewsCard from "../../component/card/NewsCard";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardMain = () => {
  const layout = [
    { i: "earnings", x: 0, y: 0, w: 1, h: 1 },
    { i: "spend", x: 1, y: 0, w: 1, h: 1 },
    { i: "sales", x: 2, y: 0, w: 1, h: 1 },
    { i: "newsInsights", x: 0, y: 1, w: 2, h: 2 },
    { i: "Revenue", x: 2, y: 1, w: 1, h: 2 },
    { i: "checkTable", x: 0, y: 3, w: 2, h: 2 },
    { i: "complexTable", x: 2, y: 3, w: 2, h: 2 },
    { i: "pieChart", x: 0, y: 5, w: 1, h: 2 },
    { i: "calendar", x: 1, y: 5, w: 1, h: 2 },
    { i: "teamMembers", x: 2, y: 5, w: 1, h: 2 },
    { i: "tasks", x: 0, y: 2, w: 1, h: 1 },
  ];

  const revenueData = {
    Sales: 50000,
    Consulting: 30000,
    "Ad Revenue": 20000,
    Subscription: 15000,
    Marketing: 10000,
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
      rowHeight={150}
      draggableHandle=".drag-handle"
      isResizable={false} // Disable resizing for all items
    >
      <div key="earnings">
        <MetricCard
          title="Stock Trend"
          stockMode={true}
          companyName="Apple Inc."
          stockName="AAPL"
          stockValue="$150.30"
          trend="up"
        />
      </div>
      <div
        key="spend"
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
      >
        <MetricCard title="Spend this month" value="$642.39" />
      </div>
      <div
        key="sales"
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
      >
        <MetricCard title="Sales" value="$574.34" />
      </div>

      <div key="newsInsights" className="rounded-lg py-2">
        <h3 className="text-lg font-semibold mb-4 drag-handle">
          News Insights
        </h3>
        <NewsCard
          thumbnail="https://via.placeholder.com/100"
          header="Apple Announces New Product Line"
          content="Apple has introduced its latest lineup of products, featuring new technology and design."
        />
        <NewsCard
          thumbnail="https://via.placeholder.com/100"
          header="Apple Announces New Product Line"
          content="Apple has introduced its latest lineup of products, featuring new technology and design."
        />
      </div>

      <div
        key="Revenue"
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
      >
        <div className="w-full text-left">
          <h3 className="text-lg font-semibold mb-4 drag-handle">Revenue</h3>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <PieChart data={revenueData} />
        </div>
      </div>
    </ResponsiveGridLayout>
  );
};

export default DashboardMain;
