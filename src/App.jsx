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
import SignDetail from "./components/SignDetail";
import TriplicityDetail from "./components/TriplicityDetail"

import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

import AllSignsList from "./pages/AllSignsList";
import AllTriplicities from "./pages/AllTriplicities"
/*import Comments from "./pages/Comments";*/



/*import AllSignsList from "./pages/AllSignsList";*/

/*



import Comments from './pages/Comments'



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
        <Route path="/triplicities" element={<AllTriplicities />} />
        <Route path="/triplicities/:triplicityId" element={<TriplicityDetail />} />
       { /*<Route path="/comments" element={<Comments />} />*/}
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    

      <Footer />
     
    </>
  );
}

export default App;
