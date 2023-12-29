import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="contacts" element={<Contact />} />
                    </Route>
                </Routes>
      <h1>Hello, it's Edemialem, let's build amazon</h1>
        </div>
    </BrowserRouter>
  );
}

export default App;

