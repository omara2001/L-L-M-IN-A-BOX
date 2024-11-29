import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardUI from "./DashboardUI";
import PricingPage from "./PricingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardUI />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
