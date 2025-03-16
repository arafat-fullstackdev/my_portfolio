
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <NavBar />  {/* Navbar should be outside Routes */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
