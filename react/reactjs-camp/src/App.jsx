import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import JobSearch from "./pages/JobSearch";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="job-search" element={<JobSearch />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
