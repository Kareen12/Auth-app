import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Forgotpass from "./components/Forgotpass";
import { useState } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [isLoggedin, setLoggedIn] = useState(null);
  const logIn = () => {
    setLoggedIn(true);
  };
  const logOut = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <>
        <Navbar isLoggedIn={isLoggedin} onLogin={logIn} onLogout={logOut} />
        {/* {isLoggedin ? (
          <button onClick={logOut}></button>
        ) : (
          <button onClick={logIn}></button>
        )} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedin}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/Forgotpass" element={<Forgotpass />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
