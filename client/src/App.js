
import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={< />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
     
      </Routes>
      <div> Foooter </div>
    </Router>
  );
}

export default App;
