import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Dogs from "./pages/Dogs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/doggos" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
