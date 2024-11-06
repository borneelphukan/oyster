import { useState } from "react";
import {
  FaHome,
  FaTable,
  FaChartPie,
  FaUser,
  FaLayerGroup,
  FaBars,
} from "react-icons/fa";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const layout = [
    { i: "earnings", x: 0, y: 0, w: 1, h: 1 },
    { i: "spend", x: 1, y: 0, w: 1, h: 1 },
    { i: "sales", x: 2, y: 0, w: 1, h: 1 },
    { i: "balance", x: 3, y: 0, w: 1, h: 1 },
    { i: "lineChart", x: 0, y: 1, w: 2, h: 2 },
    { i: "weeklyRevenue", x: 2, y: 1, w: 1, h: 2 },
    { i: "dailyTraffic", x: 3, y: 1, w: 1, h: 2 },
    { i: "checkTable", x: 0, y: 3, w: 2, h: 2 },
    { i: "complexTable", x: 2, y: 3, w: 2, h: 2 },
    { i: "pieChart", x: 0, y: 5, w: 1, h: 2 },
    { i: "calendar", x: 1, y: 5, w: 1, h: 2 },
    { i: "teamMembers", x: 2, y: 5, w: 1, h: 2 },
    { i: "tasks", x: 0, y: 2, w: 1, h: 1 },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

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
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </header>

        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={150}
          draggableHandle=".drag-handle"
        >
          <div key="earnings" className="bg-white rounded-lg shadow p-4">
            <MetricCard title="Earnings" value="$350.4" />
          </div>
          <div key="spend" className="bg-white rounded-lg shadow p-4">
            <MetricCard title="Spend this month" value="$642.39" />
          </div>
          <div key="sales" className="bg-white rounded-lg shadow p-4">
            <MetricCard title="Sales" value="$574.34" />
          </div>
          <div key="balance" className="bg-white rounded-lg shadow p-4">
            <MetricCard title="Your balance" value="$1,000" />
          </div>

          <div key="lineChart" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Total Spend
            </h3>
            <div className="h-40 bg-gray-400 rounded-lg">
              Line Chart Placeholder
            </div>
          </div>

          <div key="weeklyRevenue" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Weekly Revenue
            </h3>
            <div className="h-40 bg-gray-400 rounded-lg">
              Bar Chart Placeholder
            </div>
          </div>

          <div key="dailyTraffic" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Daily Traffic
            </h3>
            <div className="h-40 bg-gray-400 rounded-lg">
              Traffic Chart Placeholder
            </div>
          </div>

          <div key="checkTable" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Check Table
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Progress</th>
                  <th>Quantity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  name="Horizon UI PRO"
                  progress="17.5%"
                  quantity="2,448"
                  date="24.Jan.2021"
                />
              </tbody>
            </table>
          </div>

          <div key="complexTable" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Complex Table
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  name="Horizon UI PRO"
                  status="Approved"
                  date="18 Apr 2021"
                  progress="50%"
                />
              </tbody>
            </table>
          </div>

          <div key="pieChart" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Your Pie Chart
            </h3>
            <div className="h-40 bg-gray-400 rounded-lg">
              Pie Chart Placeholder
            </div>
          </div>

          <div key="calendar" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">Calendar</h3>
            <div className="h-40 bg-gray-400 rounded-lg">
              Calendar Placeholder
            </div>
          </div>

          <div key="teamMembers" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">
              Team Members
            </h3>
            <TeamMember name="Adela Parkson" role="Creative Director" />
          </div>

          <div key="tasks" className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 drag-handle">Tasks</h3>
            <ul className="space-y-2">
              <li>Landing Page Design</li>
            </ul>
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 transform lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0`}
    >
      <h2 className="text-2xl font-bold mb-8">Oyster IO</h2>
      <nav className="space-y-4">
        <SidebarItem icon={<FaHome />} label="Dashboard" />
        <SidebarItem icon={<FaLayerGroup />} label="NFT Marketplace" />
        <SidebarItem icon={<FaTable />} label="Tables" />
        <SidebarItem icon={<FaChartPie />} label="Kanban" />
        <SidebarItem icon={<FaUser />} label="Profile" />
      </nav>
      <button
        className="absolute top-4 right-4 text-gray-600 lg:hidden"
        onClick={toggleSidebar}
      >
        ✕
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, label }: { icon: JSX.Element; label: string }) => {
  return (
    <div className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100">
      <div className="text-gray-500">{icon}</div>
      <span className="text-gray-800 font-medium">{label}</span>
    </div>
  );
};

const MetricCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white rounded-lg shadow p-4 text-center">
    <h4 className="font-semibold">{title}</h4>
    <p className="text-2xl">{value}</p>
  </div>
);

const TableRow = ({ name, status, progress, date, quantity }: any) => (
  <tr>
    <td>{name}</td>
    <td>{status || progress}</td>
    <td>{quantity}</td>
    <td>{date}</td>
  </tr>
);

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-gray-300 rounded-full h-10 w-10"></div>
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

export default Dashboard;
