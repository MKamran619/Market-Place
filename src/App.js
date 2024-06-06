import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/dashboard/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Collections from "./components/pages/collections/Collections";
import ConnectWallet from "./components/pages/connectWallet/ConnectWallet";
import "./assests/styles/styles.css";
import "./assests/styles/utilities.css";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:account" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/Connect-wallet" element={<ConnectWallet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
