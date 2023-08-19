import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "./register";
import Reset from "./reset";
import Dashboard from './dashboard';
// import TableData from './form';
function App() {
  return (
    <div className='App'>
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>   
      </Router> 
    </div>
    </div>
  );
}

export default App;
