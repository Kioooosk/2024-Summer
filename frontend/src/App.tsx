import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Complete from './pages/Complete';
import './styles/global.css';
import { MainPage, Reception, Registered, Certificate } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/registered/:step" element={<Registered />} />
        <Route path="/reception/:step" element={<Reception />} />
        <Route path="/certificate/:step" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
