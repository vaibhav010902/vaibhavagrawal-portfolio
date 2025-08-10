import React from 'react';
import Navbar from './component/navbar/Navbar';
import HomePage from './component/pages/homePage/HomePage';
import Footer from './component/footer/Footer';
import Project from './component/pages/projectPage/Project';
import Internship from './component/pages/internshipPage/Internship';
import Contact from './component/pages/contactPage/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <HomePage />
        </>
      ),
    },
    {
      path: '/project',
      element: (
        <>
          <Navbar />
          <Project />
        </>
      ),
    },
    {
      path: '/internship',
      element: (
        <>
          <Navbar />
          <Internship />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
  ]);
return (
  <>
    {/* <Navbar/>
      <HomePage/>
      <Project/>
      <Internship/>
      <Footer/> */}
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    {/* <Footer /> */}
  </>
)
}

export default App