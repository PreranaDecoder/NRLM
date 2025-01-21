import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Adjust the path if HomePage.jsx is in another folder
import Dashboard from "../dashboard_code/src/pages/Dashboard"; // Update path based on directory structure
import Login from "../dashboard_code/src/pages/Login";
import { AuthProvider } from "../dashboard_code/src/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
