import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import KataSambutan from "./components/kata-sambutan";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <KataSambutan />
        {/* <h1></h1> */}
        {/* <Content /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
