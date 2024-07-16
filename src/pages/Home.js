import React from "react";
import "../App.css";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Footer from "../components/footer/Footer";



const App = () => {
    return(
        <>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Work />
        </main>
        <Footer />
        </>
    )
}

export default App