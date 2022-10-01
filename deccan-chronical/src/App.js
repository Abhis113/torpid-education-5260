import Home from "./Pages/Home";
import {Nation} from "./Pages/Nation";
import {Routes,Route} from "react-router-dom";
import South from "./Pages/South";
import World from "./Pages/World";
import Entertainment from "./Pages/Entertainment";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";
import Lifestyle from "./Pages/Lifestyle";
import Gallery from "./Pages/Gallery";
import Je from "./Pages/Je";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nation" element={<Nation />} />
          <Route path="/south" element={<South />} />
          <Route path="/world" element={<World/>} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/Je" element={<Je/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/Lifestyle" element={<Lifestyle/>} />
          <Route path="/Gallery" element={<Gallery/>} />
        </Routes>

      </div>
  );
}

export default App;
