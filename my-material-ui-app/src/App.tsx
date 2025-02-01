import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./sign-up/SignUp.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
