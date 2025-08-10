import React from 'react';
import Navbar from './component/navbar/Navbar';
import HomePage from './component/pages/homePage/HomePage';
import Footer from './component/footer/Footer';
import Project from './component/pages/projectPage/Project';
import Internship from './component/pages/internshipPage/Internship';
import Contact from './component/pages/contactPage/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Link } from "react-router-dom";


function App() {
  
return (
  <>
    <Navbar />
    <Outlet/>
  </>
)
}

export default App