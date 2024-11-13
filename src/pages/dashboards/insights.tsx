import MetricCard from "../../component/card/MetricCard";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import NewsCard from "../../component/card/NewsCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Insights = () => {
  const sectionLayouts = [
    { i: "profitQ1", x: 0, y: 0, w: 1, h: 1 },
    { i: "assets", x: 0, y: 0, w: 1, h: 1 },
    { i: "operatingCashFlow", x: 0, y: 0, w: 1, h: 1 },
    { i: "productRevenue", x: 0, y: 0, w: 1, h: 1 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">News</h2>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: sectionLayouts.slice(0, 2) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={150}
          isResizable={false}
        >
          <div key="newsInsights" className="rounded-lg ">
            <NewsCard
              thumbnail="https://via.placeholder.com/100"
              header="Apple Announces New Product Line"
              content="Apple has introduced its latest lineup of products, featuring new technology and design."
            />
          </div>
        </ResponsiveGridLayout>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Trends</h2>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: sectionLayouts.slice(2, 4) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
          rowHeight={150}
          isResizable={false}
        >
          <div key="assets">
            <MetricCard title="trends" description="Overview of trends." />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Insights;
