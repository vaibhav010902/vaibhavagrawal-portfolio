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
    // const API_URL = "http://127.0.0.1:5000/api/project";
    // const [projects, setprojects] = useState([]);

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(res => res.json())
    //         .then(data => (
    //             setprojects(data)
    //         ));
    // }, [])

    const projects = [
    {
        id: 6,
        type: "web",
        title: "Express.js Pinterest-like Web App",
        description: "Built a Pinterest-like web application using Node.js, Express.js, MongoDB, and EJS, featuring user authentication, dynamic feeds, and image upload functionality with Multer. Designed responsive and reusable UI components, including a navigation bar, sidebar, and notification panels, using EJS templating, CSS, and JavaScript for dynamic behaviour. Implemented secure user registration and login with Passport.js, session management, and MongoDB integration for storing user profiles, posts, and uploaded images. Developed RESTful routes with modular Express.js structure, robust error handling, and efficient data retrieval using Mongoose population for a seamless user experience. ",
        tech: ["HTML","CSS","JavaScript","Express","MongoDB","Multer","Passport"],
        github: "https://github.com/vaibhav010902/Express.js-Pinterest-like-Web-App.git",
        thumbnail: "/thumbnail/pinterest.png"
    },
    {
        id: 1,
        type: "web",
        title: "Chatbot for Course Inquiry And Support",
        description: "This project is a Flask-based chatbot designed to assist users with course inquiries, enrollment, technical support, account management, and more. The chatbot uses natural language processing (NLP) with SpaCy and a Support Vector Machine (SVM) model for intent classification. The frontend is built with HTML, CSS, and JavaScript, providing a user-friendly interface for interacting with the chatbot.",
        tech: ["HTML","CSS","JavaScript","Python","Flask","Scikit-learn"],
        github: "https://github.com/vaibhav010902/Ed-Tech-Chatbot",
        thumbnail: "/thumbnail/chatbotforcourseinquiryandsupport.png"
    },   
    {
        id: 2,
        type: "data-analysis",
        title: "Marketing Analysis For ShopEasy",
        description: "Comprehensive Analysis: Created an interactive Power BI dashboard to analyze market trends and product performance over 2023–2025, enabling efficient decision-making. Automated ETL Workflows: Streamlined data extraction, transformation, and loading using SQL, Power Query, NumPy, and Pandas, ensuring accurate and up-to-date insights while reducing manual effort. Advanced Metrics: Implemented DAX measures to track conversion rates, sentiment trends, revenue growth, and regional performance. Data Visualization: Designed clear visualizations highlighting top-performing products, customer sentiment, and engagement metrics, contributing to improved marketing strategies.",
        tech: ["Python","SQL","Power BI","Numpy","Pandas","Data Visualization","Dashboard"],
        github: "https://github.com/vaibhav010902/Ride-Booking-Analysis-for-OLA",
        dashboard: "https://app.powerbi.com/view?r=eyJrIjoiNjUyMTNjOWQtYmRjZS00OTE3LTg0N2MtYTBlMDdhZmU2ZDQzIiwidCI6IjkwNWEwNDc2LTkyZWEtNDg1ZC1hNThjLTQ5M2I1MDU2NDRjNCJ9",
        thumbnail: "/thumbnail/marketinganalysisfroshopeasy.png"
    },
    {
        id: 3,
        type: "data-analysis",
        title: "Ride Booking Analysis Of OLA",
        description: "Developed an interactive Power BI dashboard to analyze 116K ride bookings, automating the ETL process using Power Query for efficient data cleaning and transformation. Implemented DAX measures to calculate metrics like booking success rates, cancellation trends, and revenue distribution across regions. Collaborated with stakeholders to define actionable KPIs, enabling better decision-making on surge pricing and customer retention strategies. Optimized visualization techniques to track real-time operational metrics, improving decision-making speed by 30%.",
        tech: ["Python","Power BI","Numpy","Pandas","Data Visualization","Dashboard"],
        github: "https://github.com/vaibhav010902/Ride-Booking-Analysis-for-OLA",
        dashboard: "https://app.powerbi.com/view?r=eyJrIjoiYzlmNzUyYzgtMjgzMC00OGM1LWJjZDctZmRhNjg0ODQ5YWZmIiwidCI6IjkwNWEwNDc2LTkyZWEtNDg1ZC1hNThjLTQ5M2I1MDU2NDRjNCJ9",
        thumbnail: "/thumbnail/ridebookinganalysisofola.png"
    },
    {
        id: 4,
        type: "data-analysis",
        title: "Sales Performance Analysis For Electrohub",
        description: "Designed and developed an interactive Power BI dashboard to analyze sales data from 2020–2024, enabling stakeholders to monitor performance and trends efficiently. Automated data extraction, transformation, and loading (ETL) processes using Power Query, reducing manual effort by 30% and ensuring accurate, up-to-date reporting. Leveraged DAX functions to create dynamic measures for tracking revenue, profit margins, and category-wise performance. Utilized data visualization techniques to highlight revenue growth, regional performance, and campaign effectiveness, driving a 10% improvement in strategic planning.",
        tech: ["Python","Power BI","Numpy","Pandas","Data Visualization","Dashboard"],
        github: "https://github.com/vaibhav010902/Sales-Analysis-Of-Electrohub",
        dashboard: "https://app.powerbi.com/view?r=eyJrIjoiNmJhOTdlNTQtYTY4MS00ZGQ1LWIyNjAtMzhlYTA0NTg1NzkwIiwidCI6IjkwNWEwNDc2LTkyZWEtNDg1ZC1hNThjLTQ5M2I1MDU2NDRjNCJ9",
        thumbnail: "/thumbnail/salesperformanceanalysisforelectrohub.png"
    },
    {
        id: 5,
        type: "data-analysis",
        title: "Season Analysis Of IPL and Players",
        description: "Built interactive dashboards in PowerBI to provide actionable insights into team performance and player selection during the IPL season. Analyzed 100+ matches to identify trends in player performance (e.g., batting averages, strike rates). ",
        tech: ["Python","Power BI","Numpy","Pandas","Data Visualization","Dashboard"],
        github: "https://github.com/vaibhav010902/IPL-Analysis",
        dashboard: "https://app.powerbi.com/view?r=eyJrIjoiYzlmNzUyYzgtMjgzMC00OGM1LWJjZDctZmRhNjg0ODQ5YWZmIiwidCI6IjkwNWEwNDc2LTkyZWEtNDg1ZC1hNThjLTQ5M2I1MDU2NDRjNCJ9",
        thumbnail: "/thumbnail/seasonanalsisofiplandplayers.png"
    }
    ]


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
                        <h2>Projects</h2>
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