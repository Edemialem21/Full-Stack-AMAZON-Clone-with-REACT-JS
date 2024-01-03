import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';
import Contact from './componets/Contact'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="/contact   " element={<Contact />}>
                    </Route>
                </Routes>
            </Router>
     
        </div>
   
  );
}

export default App;

