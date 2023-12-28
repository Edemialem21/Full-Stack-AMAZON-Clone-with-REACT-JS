
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
// import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(){
    return (
    <Router>
      <div className='App'>
        <Header />
        {/* <h1>Hello, it's Edemialem, let's build amazon</h1> */}
          <nav>
          <Link to="/">contact</Link>
          </nav>
          
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/contact' element={<Contact />} ></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
