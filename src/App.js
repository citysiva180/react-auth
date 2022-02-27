import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

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
