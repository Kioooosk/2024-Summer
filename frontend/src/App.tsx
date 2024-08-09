import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Complete from './component/Complete';
import StepOneOne from './component/step1-1';
import StepOneTwo from "./component/step1-2";
import StepOneThree from "./component/step1-3";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/scene1-1" element={<StepOneOne />} />
        <Route path="/scene1-2" element={<StepOneTwo />} />
        <Route path="/scene1-3" element={<StepOneThree />} />
      </Routes>
    </Router>
  );
}

export default App;