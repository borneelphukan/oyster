import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../component/layout/Sidebar";
import Finance from "./dashboards/finance";
import DashboardMain from "./dashboards/dashboard";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Insights from "./dashboards/insights";

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
        <header className="mb-4">
          <h1 className="text-3xl font-bold">{selectedSection}</h1>
        </header>
        {selectedSection === "Dashboard" && <DashboardMain />}
        {selectedSection === "Financials" && <Finance />}
        {selectedSection === "Market Insights" && <Insights />}
      </div>
    </div>
  );
};

export default Dashboard;
