import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Complete from './component/Complete';
import './styles/global.css';
import {
  MainPage,
  Pharmacy,
  Reception,
  DetailInfoPage,
  Registered,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/reception/:step" element={<Reception />} />
        <Route path="/pharmacy/:step" element={<Pharmacy />} />
        <Route path="/pharmacy/2/:id" element={<DetailInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
