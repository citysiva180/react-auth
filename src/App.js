import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import NavBar from "./Components/utils/NavBar/NavBar";
import PostPage from "./Components/PostPages/PostPage";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route exact path="/about" element={<HomePage></HomePage>}></Route>
          <Route exact path="/posts" element={<PostPage></PostPage>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
