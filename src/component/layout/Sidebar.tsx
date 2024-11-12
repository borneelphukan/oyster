import {
  FaHome,
  FaBuilding,
  FaChartPie,
  FaChartLine,
  FaFileAlt,
  FaNewspaper,
} from "react-icons/fa";

type props = {
  isOpen: boolean;
  toggleSidebar: () => void;
  onSectionChange: (section: string) => void;
};

const Sidebar = ({ isOpen, toggleSidebar, onSectionChange }: props) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg p-6 transform lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0`}
    >
      <nav className="space-y-4">
        <SidebarItem
          icon={<FaHome />}
          label="Dashboard"
          onClick={() => onSectionChange("Dashboard")}
        />
        <SidebarItem
          icon={<FaBuilding />}
          label="Companies"
          onClick={() => onSectionChange("Companies")}
        />
        <SidebarItem
          icon={<FaChartPie />}
          label="Financials"
          onClick={() => onSectionChange("Financials")}
        />
        <SidebarItem
          icon={<FaChartLine />}
          label="Stocks"
          onClick={() => onSectionChange("Stocks")}
        />
        <SidebarItem
          icon={<FaChartPie />}
          label="Analytics"
          onClick={() => onSectionChange("Analytics")}
        />
        <SidebarItem
          icon={<FaFileAlt />}
          label="Reports"
          onClick={() => onSectionChange("Reports")}
        />
        <SidebarItem
          icon={<FaNewspaper />}
          label="Market Insights"
          onClick={() => onSectionChange("Market Insights")}
        />
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

const SidebarItem = ({
  icon,
  label,
  onClick,
}: {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="text-gray-200 dark:text-white">{icon}</div>
      <span className="text-gray-800 dark:text-gray-500 font-medium">
        {label}
      </span>
    </div>
  );
};

export default Sidebar;
