import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Form } from "./components/form/form";
import { langDataEng, langDataNok } from "./data/projectsData";
export const Context = createContext();

function App() {
  const [showContact, setShowContact] = useState(false);
  const [langData, setLangData] = useState(langDataEng);

  function handleLanguage(e) {
    if (e.target.id === "engLang") {
      setLangData(langDataEng);
    } else if (e.target.id === "nokLang") {
      setLangData(langDataNok);
    }
  }

  return (
    <Context.Provider
      value={{ showContact, setShowContact, langData, handleLanguage }}
    >
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
