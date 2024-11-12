import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Responsive, WidthProvider } from "react-grid-layout";
import Sidebar from "../component/layout/Sidebar";
import MetricCard from "../component/card/MetricCard";
import PieChart from "../component/charts/PieChart";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  const layout = [
    { i: "earnings", x: 0, y: 0, w: 1, h: 1 },
    { i: "spend", x: 1, y: 0, w: 1, h: 1 },
    { i: "sales", x: 2, y: 0, w: 1, h: 1 },
    { i: "lineChart", x: 0, y: 1, w: 2, h: 2 },
    { i: "Revenue", x: 2, y: 1, w: 1, h: 2 },
    { i: "checkTable", x: 0, y: 3, w: 2, h: 2 },
    { i: "complexTable", x: 2, y: 3, w: 2, h: 2 },
    { i: "pieChart", x: 0, y: 5, w: 1, h: 2 },
    { i: "calendar", x: 1, y: 5, w: 1, h: 2 },
    { i: "teamMembers", x: 2, y: 5, w: 1, h: 2 },
    { i: "tasks", x: 0, y: 2, w: 1, h: 1 },
  ];

  const revenueData = {
    " Sales": 50000,
    "Consulting ": 30000,
    "Ad Revenue": 20000,
    Subscription: 15000,
    Marketing: 10000,
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onSectionChange={handleSectionChange}
      />

      {/* Main dashboard */}
      <div className="flex-1 p-6">
        <button
          className="lg:hidden p-2 mb-4 text-gray-600 hover:text-gray-900"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{selectedSection}</h1>
        </header>

        {/* Render original dashboard if "Dashboard" is selected */}
        {selectedSection === "Dashboard" && (
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

            {/* Remaining original dashboard items */}
            <div
              key="lineChart"
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
            >
              <h3 className="text-lg font-semibold mb-4 drag-handle">
                Total Spend
              </h3>
              <div className="h-40 bg-gray-400 dark:bg-gray-800 rounded-lg">
                Line Chart Placeholder
              </div>
            </div>
            <div
              key="Revenue"
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
            >
              <div className="w-full text-left">
                <h3 className="text-lg font-semibold mb-4 drag-handle">
                  Revenue
                </h3>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <PieChart data={revenueData} />
              </div>
            </div>
          </ResponsiveGridLayout>
        )}

        {/* Render financial sections if "Financials" is selected */}
        {selectedSection === "Financials" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricCard
              title="Profit & Loss"
              description="Overview of profits and losses."
            />
            <MetricCard
              title="Balance Sheet"
              description="Detailed assets and liabilities."
            />
            <MetricCard
              title="Cash Flow"
              description="Analysis of cash inflows and outflows."
            />
            <MetricCard
              title="Revenue"
              description="Overview of revenue sources."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
