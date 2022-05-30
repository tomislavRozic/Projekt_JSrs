import "./styles.css";
import Header from "./Components/Header";
import Interestigness from "./Components/Interestigness";
import O_Autoru from "./Components/O_Autoru";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Povijest from "./Components/Povijest";
import Djela from "./Components/Djela";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Interestigness />
      <O_Autoru />

      <Router>
        <Routes>
          <Route exact path="/" element={<Djela />}></Route>
          <Route exact path="/Povijest" element={<Povijest />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
