import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './index';
// import TableData from './form';
function App() {
  return (
    <div className='App'>
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>   
      </Router> 
    </div>
    </div>
  );
}

export default App;
