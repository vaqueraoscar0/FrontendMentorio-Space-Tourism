import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
