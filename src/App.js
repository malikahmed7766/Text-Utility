import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";

const body = document.querySelector("body");

function App() {
  const [bgMode, bgSetMode] = useState('light');
  const [textMode, textSetMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 2000);

  const toggleMode = () => {
    if (bgMode === "light" && textMode === "dark") {
      bgSetMode("dark");
      textSetMode("light");
      body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Has Been Enabled!", "success");
    }

    else {
      bgSetMode("light");
      textSetMode("dark");
      body.style.backgroundColor = "#fefefe";
      showAlert("Light Mode Has Been Enabled!", "success");
    }

  }

  return (
    <>
      <Navbar logo="Code Connect" mode={bgMode} text={textMode} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      <main>
        <TextForm heading="Enter a Word Analyze" mode={bgMode} text={textMode} setAlert={alert} showAlert={showAlert} />
      </main>
    </>
  );
}

export default App;