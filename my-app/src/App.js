import './App.css';
import SiderDemo from "./pages/home/index"
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <SiderDemo />
      </Router>
    </div>
  );
}

export default App;
