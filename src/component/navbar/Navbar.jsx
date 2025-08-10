import React from 'react'
import styles from './Navbar.module.css'
import { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { Link } from "react-router-dom";


function Navbar() {
  const navbarTitle = useRef(null);
  const navbarBtn = useRef(null);

  useEffect(()=>{
    const tl = gsap.timeline();
    
    tl.fromTo(
      navbarTitle.current,
      {opacity: 0, delay:0.5, y:-100},
      {opacity:1, duration: 1, y:0}
    )
    const buttons = gsap.utils.toArray(`.${styles.navbar_btn}`);

    tl.fromTo(
      buttons,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
    );
  },[])
    
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_title} ref={navbarTitle}>
        <span>Vaibhav Agrawal</span>
      </div>
      <div className={styles.navbar_btns_container}>
        <Link to="/" id='navbar-about-me' className={styles.navbar_btn}>About me</Link>
        <Link to="https://drive.google.com/file/d/1L7KI9kTxlBrX3VDg6UaQwmWX_hGXtr4I/view?usp=sharing"  target="_blank" id='navbar-resume' className={styles.navbar_btn}>Resume</Link>
        <Link to="/project" id='navbar-projects' className={styles.navbar_btn} onClick={()=>(handleclick(e))}>Projects</Link>
        <Link to="/internship" id='navbar-internship' className={styles.navbar_btn}>Internship</Link>
        <Link to="/contact" id='navbar-contact' className={styles.navbar_btn}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar