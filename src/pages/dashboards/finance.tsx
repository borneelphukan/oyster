import MetricCard from "../../component/card/MetricCard";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Finance = () => {
  const sectionLayouts = [
    { i: "profitQ1", x: 0, y: 0, w: 1, h: 1 },
    { i: "assets", x: 0, y: 0, w: 1, h: 1 },
    { i: "operatingCashFlow", x: 0, y: 0, w: 1, h: 1 },
    { i: "productRevenue", x: 0, y: 0, w: 1, h: 1 },
  ];

  return (
    <div className="space-y-8">
      {/* Profit & Loss Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Profit & Loss</h2>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: sectionLayouts.slice(0, 2) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={150}
          isResizable={false}
        >
          <div key="profitQ1">
            <MetricCard
              title="Profit Q1"
              description="Profit overview for Q1."
            />
          </div>
        </ResponsiveGridLayout>
      </div>

      {/* Balance Sheet Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Balance Sheet</h2>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: sectionLayouts.slice(2, 4) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={150}
          isResizable={false}
        >
          <div key="assets">
            <MetricCard title="Assets" description="Overview of assets." />
          </div>
        </ResponsiveGridLayout>
      </div>

      {/* Cash Flow Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Cash Flow</h2>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: sectionLayouts.slice(4, 6) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={150}
          isResizable={false}
        >
          <div key="operatingCashFlow">
            <MetricCard
              title="Operating Cash Flow"
              description="Cash flow from operations."
            />
          </div>
        </ResponsiveGridLayout>
      </div>

      <div>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: sectionLayouts.slice(6, 8) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={150}
          isResizable={false}
        >
          <div key="productRevenue">
            <MetricCard
              title="Product Revenue"
              description="Revenue from products."
            />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Finance;
