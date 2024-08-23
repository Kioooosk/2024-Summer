import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Complete from './pages/Complete';
import './styles/global.css';
import {  MainPage,  Pharmacy,
  Reception,
  DetailInfoPage,
  Registered,
  NotRegistered
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/registered/:step" element={<Registered />} />
        <Route path="/notregistered/:step" element={<NotRegistered />} />
        <Route path="/reception/:step" element={<Reception />} />
        <Route path="/pharmacy/:step" element={<Pharmacy />} />
        <Route path="/pharmacy/2/:id" element={<DetailInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;