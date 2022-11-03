import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Form } from "./components/form/form";

export const Context = createContext();

function App() {
  const [showContact, setShowContact] = useState(false);
  return (
    <Context.Provider value={{ showContact, setShowContact }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Form />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
