import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Franchise from "./routes/Franchise";
import Menu from "./routes/Menu";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/franchise" element={<Franchise />}/>
        <Route path="/menu" element={<Menu />}/>
      </Routes>
      
    </div>
  );
}
