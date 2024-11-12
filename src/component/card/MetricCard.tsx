// MetricCard.tsx
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
  title: string;
  value?: string;
  description?: string;
  stockMode?: boolean;
  companyName?: string;
  stockName?: string;
  stockValue?: string;
  trend?: "up" | "down"; // "up" for green arrow, "down" for red arrow
};

const MetricCard = ({
  title,
  value,
  description,
  stockMode = false,
  companyName,
  stockName,
  stockValue,
  trend,
}: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      {stockMode ? (
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-1 drag-handle">
            {companyName}
          </h3>
          <div className="flex items-center mb-2">
            <p className="text-lg font-medium mr-2">{stockName}</p>
            {trend === "up" ? (
              <FaArrowUp className="text-green-500" />
            ) : trend === "down" ? (
              <FaArrowDown className="text-red-500" />
            ) : null}
          </div>
          <p className="text-2xl font-bold">{stockValue}</p>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 drag-handle">{title}</h3>
          {value && <p className="text-2xl">{value}</p>}
          {description && (
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
