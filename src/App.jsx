import "./App.css";
import "./index.css";
import axios from "axios";
import React from "react";

import { Routes, Route,} from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/Userpage";
import NotFound from "./pages/NotFound";

import AllSignsList from "./pages/AllSignsList";
import SignDetail from "./components/SignDetail";


/*import AllSignsList from "./pages/AllSignsList";*/

/*


import AllTriplicities from './pages/AllTriplicities'
import Comments from './pages/Comments'
import Favorites from './pages/Favorites'
import SignDetail from './pages/SignDetail'
import TriplicitiyDetail from './pages/TriplicityDetail'
*/


function App() {
  return (
    <>
      
      <Navbar />

      
        <Routes>
   
        {/*<Route path="http://localhost:5005/users/:userId" element={<UserPage />} />*/}
        <Route path="/" element={<Hero />} />
        <Route path="/signs" element={<AllSignsList />} />
        <Route path="/signs/:signId" element= {<SignDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    
    
      <Footer />
     
    </>
  );
}

export default App;
