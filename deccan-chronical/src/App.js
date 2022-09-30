import './App.css';
import Topsection from"./Component/Home/Topsection";
import Navbar from "./Component/Home/Navbar";
import Bottomsection from "./Component/Home/Bottomsection";
import Footer from "./Component/Home/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Topsection/>
      <Bottomsection/>
      <Footer/>
      </div>
  );
}

export default App;
