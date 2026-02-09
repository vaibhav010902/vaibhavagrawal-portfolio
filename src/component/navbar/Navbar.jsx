import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { Link } from "react-router-dom";


function Navbar() {
  const navbarTitle = useRef(null);
  const navbarBtn = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navbarTitle.current,
      { opacity: 0, delay: 0.5, y: -100 },
      { opacity: 1, duration: 1, y: 0 }
    )
    const buttons = gsap.utils.toArray(`.${styles.navbar_btn}`);

    tl.fromTo(
      buttons,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
    );
  }, [])

  const sidebarRef = useRef(null)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [activeButton, setActiveButton] = useState(null);

   const handleButtonClick = (id) => {
    setActiveButton(id); // Set the clicked button as active
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_title} ref={navbarTitle}>
          <span>Vaibhav Agrawal</span>
        </div>
        <div className={styles.navbar_btns_container}>
          <Link
            to="/"
            id="navbar-about-me"
            className={`${styles.navbar_btn} ${
              activeButton === 'navbar-about-me' ? styles.active : ''
            }`}
            onClick={() => handleButtonClick('navbar-about-me')}
          >
            About me
          </Link>
          <Link
            to="https://drive.google.com/file/d/138Yqxdk-C-exTbgOCVg9Ovtaqt9eGJG-/view?usp=drive_link"
            target="_blank"
            id="navbar-resume"
            className={`${styles.navbar_btn} ${
              activeButton === 'navbar-resume' ? styles.active : ''
            }`}
            onClick={() => handleButtonClick('navbar-resume')}
          >
            Resume
          </Link>
          <Link
            to="/project"
            id="navbar-projects"
            className={`${styles.navbar_btn} ${
              activeButton === 'navbar-projects' ? styles.active : ''
            }`}
            onClick={() => handleButtonClick('navbar-projects')}
          >
            Projects
          </Link>
          <Link
            to="/internship"
            id="navbar-internship"
            className={`${styles.navbar_btn} ${
              activeButton === 'navbar-internship' ? styles.active : ''
            }`}
            onClick={() => handleButtonClick('navbar-internship')}
          >
            Internship
          </Link>
          <Link
            to="/contact"
            id="navbar-contact"
            className={`${styles.navbar_btn} ${
              activeButton === 'navbar-contact' ? styles.active : ''
            }`}
            onClick={() => handleButtonClick('navbar-contact')}
          >
            Contact
          </Link>
          <button id='navbar-contact' className={styles.menu_navbar_btn} onClick={() => setOpenSidebar((prev) => !prev)}>{openSidebar?"Close":"Menu"}</button>
        </div>
      </nav>
      <nav className={styles.sidebar} ref={sidebarRef} style={{ display: openSidebar ? 'flex' : 'none' }}>
        <div className={styles.sidebar_navbtns_container}>
          <Link 
            to="/" 
            id='navbar-about-me' 
            className={styles.sidebar_btn} 
            onClick={() => 
              setOpenSidebar((prev) => !prev)
            }
          >
              About me
          </Link>
          <Link 
            to="https://drive.google.com/file/d/138Yqxdk-C-exTbgOCVg9Ovtaqt9eGJG-/view?usp=drive_link" target="_blank" 
            id='navbar-resume' 
            className={styles.sidebar_btn} 
            onClick={() => 
              setOpenSidebar((prev) => !prev)
            }
          >
              Resume
          </Link>
          <Link 
            to="/project" 
            id='navbar-projects' 
            className={styles.sidebar_btn} 
            onClick={() => 
              setOpenSidebar((prev) => !prev)
            }
          >
              Projects
          </Link>
          <Link 
            to="/internship" 
            id='navbar-internship' 
            className={styles.sidebar_btn} 
            onClick={() => 
              setOpenSidebar((prev) => !prev)
            }
          >
              Internship
          </Link>
          <Link 
            to="/contact" 
            id='navbar-contact' 
            className={styles.sidebar_btn} 
            onClick={() => 
              setOpenSidebar((prev) => !prev)
            }
          >
              Contact
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar