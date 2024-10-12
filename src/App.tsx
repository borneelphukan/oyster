// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/Error"; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />

          <Route path="/Blogs" element={<Home />}>
            {/* Nested Route for Developer Blog */}
            <Route path="Developer" element={<Portfolio />} />
            {/* Add more nested routes here if needed */}
          </Route>

          <Route path="/Gallery" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add a catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
