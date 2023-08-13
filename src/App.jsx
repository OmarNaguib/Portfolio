import { useState } from "react";
// import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
