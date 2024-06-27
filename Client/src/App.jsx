import { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Signup from "./components/registration/Signup";
import "./styles/pages/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Signup />
    </div>
  );
}

export default App;
