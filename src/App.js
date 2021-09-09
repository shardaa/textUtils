import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1e2023";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Word play"
        aboutText="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Enter The Text " mode={mode} />
    </>
  );
}

export default App;
