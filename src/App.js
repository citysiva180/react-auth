import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import NavBar from "./Components/utils/NavBar/NavBar";
import PostPage from "./Components/PostPages/PostPage";
import Login from "./Components/Login/Login";
function App() {
  const user = false;

  return (
    <div>
      <Router>
        <NavBar user={user}></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login></Login>}
          ></Route>
          <Route
            exact
            path="/post/:id"
            element={user ? <PostPage></PostPage> : <Navigate to="/login" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
