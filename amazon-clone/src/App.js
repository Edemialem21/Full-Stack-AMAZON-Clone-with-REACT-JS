import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                </Routes>
            </Router>
      <h1>Hello, it's Edemialem, let's build amazon</h1>
        </div>
   
  );
}

export default App;

