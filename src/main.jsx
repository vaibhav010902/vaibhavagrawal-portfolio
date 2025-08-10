import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './component/pages/homePage/HomePage';
import Project from './component/pages/projectPage/Project';
import Internship from './component/pages/internshipPage/Internship';
import Contact from './component/pages/contactPage/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/project',
        element: <Project/>
      },
      {
        path: '/internship',
        element: <Internship/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
