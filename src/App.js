import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import NavBar from "./Components/utils/NavBar/NavBar";
function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route exact path="/about" element={<HomePage></HomePage>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
