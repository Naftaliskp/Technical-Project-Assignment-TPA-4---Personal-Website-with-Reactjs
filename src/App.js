// Global Styles
import React from 'react'
import GlobalStyle from "./components/GlobalStyle";
// Import React Router Dom
import { Routes, Route } from "react-router-dom";

// Header Import
import Header from "./components/Header";
// Footer Import
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import AboutMe from "./pages/aboutMe";
import Portofolio from "./pages/portofolio";
import Blog from "./pages/blog";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route exact path='/' element={<Beranda />} />
        <Route exact path='/aboutMe' element={<AboutMe />} />
        <Route exact path='/portofolio' element={<Portofolio />} />
        <Route exact path='/blog' element={<Blog />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
