import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
            <Route path='/'>
             <Header />
             <Home />
             </Route>
           </Routes>
         </Router>
      
      <h1>Hello, it's Edemialem, let's build amazon</h1>
      
      {/*header*/}
      {/**home */}
    </div>
  );
}

export default App;
