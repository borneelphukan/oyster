// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/Error"; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />

          <Route path="/Blogs" element={<Home />}>
            {/* Nested Route for Developer Blog */}
            <Route path="Developer" element={<Pricing />} />
            {/* Add more nested routes here if needed */}
          </Route>

          <Route path="/Gallery" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add a catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
