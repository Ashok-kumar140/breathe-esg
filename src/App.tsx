import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import Sidebar from "./components/Sidebar";
import DataManager from "./components/DataManager";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
function App() {
  const { token } = useSelector((state: any) => state.auth);
  console.log("USER", token);
  return (
    <div style={{ backgroundColor: "#21453C" }}>
      <Routes>
        {!token && <Route path="/login" element={<LoginPage />}></Route>}
        {!token && <Route path="/signup" element={<SignUpPage />}></Route>}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        <Route path="/update-password" element={<UpdatePassword />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        {token && (
          <>
            <Route element={<DashboardPage />}>
              <Route path="/dashboard/data-manager" element={<DataManager />} />
              <Route path="/dashboard/entry-manager" element={<div></div>} />
            </Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
