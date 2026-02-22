import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profiles from "./components/Profiles";
import Tips from "./components/Tips";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [tips, setTips] = useState([]);

  const fetchTips = async (profile) => {
    const response = await fetch(
      `http://localhost:5000/api/tips/${profile}`
    );
    const data = await response.json();
    setTips(data);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Profiles onSelect={fetchTips} />
      <Tips tips={tips} />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}

export default App;