import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
             <Header />
             <Home />
      
      <h1>Hello, it's Edemialem, let's build amazon</h1>
      
      {/*header*/}
      {/**home */}
    </div>
    </Router>
  );
}

export default App;
