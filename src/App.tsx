import "./App.css";
import Home from "./components/home";
import { NavBar } from "./components/navbar";
import { SingUp } from "./components/signUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="singup" element={<SingUp />} />
      </Routes>
    </>
  );
}

export default App;
