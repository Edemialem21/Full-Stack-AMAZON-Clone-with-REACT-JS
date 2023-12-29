import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';
import Layout from "./componets/Layout";
import Contact from "./componets/Contact";
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

