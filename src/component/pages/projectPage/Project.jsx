import React, { use } from 'react'
import styles from './Project.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import ProjectCard from '../../projectcard/ProjectCard';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import gsap from 'gsap';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';


function Project() {
    const API_URL = "http://127.0.0.1:5000/api/project";
    const [projects, setprojects] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => (
                setprojects(data)
            ));
    }, [])


    const projectContainerHeaderRef = useRef(null);
    const projectContentRef = useRef(null);


    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                projectContainerHeaderRef.current.querySelector('h2'),
                { opacity: 0, y: 50, duration: 1 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            )
            tl.fromTo(
                projectContainerHeaderRef.current.querySelectorAll('p'),
                { opacity: 0, y: 50, duration: 0.5 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
            )
            gsap.from(
                projectContentRef.current,
                {
                    scrollTrigger: {
                        trigger: projectContentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                }
            );
        });
        return () => ctx.revert();
    }, [])




    return (
        <>
            <div className={styles.projectpage}>
                <div className={styles.project_container}>
                    <div
                        className={styles.project_container_header}
                        ref={projectContainerHeaderRef}
                    >
                        <h2 style={{ fontSize: "100px" }}>Projects</h2>
                        <div>
                            <p>
                                Here’s a curated collection of my most impactful projects that showcase my passion for data, design, and development.
                                These projects span a range of domains — from data analysis and visualization to full-stack web development — and reflect my ability to solve real-world problems using technology.
                            </p>
                            <p>
                                Each project was an opportunity to apply and grow my skills in tools like Python, Power BI, SQL, and modern web frameworks like React and Express.
                                I’ve highlighted key challenges, outcomes, and technologies used to provide a glimpse into my process and problem-solving approach.
                            </p>
                            <p>
                                Whether it's uncovering insights from raw datasets, crafting dashboards for decision-makers, or building responsive web applications — these works represent my journey as a data-driven developer.
                            </p>
                        </div>
                    </div>
                    <div
                        className={styles.project_container_content}
                        ref={projectContentRef}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id || index}
                                project={project}
                                
                                
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <Outlet />
        </>
    )
}
export default Project