import React from 'react'
import styles from './Internship.module.css'
import { useState, useEffect } from 'react'
import { FaLink } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDescription } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import gsap from 'gsap';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Internship() {

    const internships = [
        {
            id: 1,
            thumbnail: "/thumbnail/nexustech.png",
            companyname: "Nexus Tech Innovation",
            position: "Embedded AI Engineer",
            type: "Full-time",
            location: "Bangalore, Karnataka",
            workmode: "Hybrid",
            duration: "Feb 2026 - Present",
            short_description: "As a Embedded AI Engineer at Nexus Tech Innovation, I worked on frontend of MRI Automation projects for healthcare clients. I also worked on developing AI-powered solution for invoice processing.",
            responsibility: "Developed an end-to-end invoice processing pipeline using OpenCV, RapidOCR, and LLM (Ollama/Gemma), reducing manual data entry effort by 60–70%. Implemented advanced image preprocessing techniques (noise reduction, contrast enhancement) to improve OCR accuracy by 30%+. Built a structured data extraction engine that converts unstructured OCR output into JSON format, achieving 95%+ data consistency. Designed and implemented table extraction logic using positional analysis (bounding boxes, column mapping), enabling accurate parsing of invoice line items. Integrated LLM (Gemma via Ollama API) for intelligent invoice parsing, improving contextual data extraction accuracy by 40%. Developed and deployed Flask-based REST APIs for invoice extraction, processing, and management, handling multiple concurrent requests efficiently. Designed a database schema using SQLAlchemy (SQLite) to store structured invoice data, supporting CRUD operations with optimized queries. Collaborated with frontend developers to build a responsive web application using React.js for the MRI Automation project, improving user experience and reducing UI-related issues by 30%.",
            achievement_and_impact: "Reduced manual data entry by 60% by building an OCR + LLM-based invoice automation system. Improved OCR accuracy by 30% using OpenCV-based preprocessing techniques. Achieved 95%+ structured data accuracy by converting unstructured OCR output into JSON. Integrated Ollama (Gemma LLM) to enhance contextual data extraction by 40%.",
            tech: ["Python", "Flask", ".NET (WPF)", "OpenCV", "RapidOCR", "Ollama(LLM)", "Rest API", "Computer Vision", "React", "TypeScript", "SQLAlchemy", "SQLite"],
            // certification: "https://drive.google.com/file/d/1hQcubcgTCOnOFcqLcw6CGCEttpmaS1Ts/view?usp=sharing",
        },
        {
            id: 2,
            thumbnail: "/thumbnail/ilearnings.jpg",
            companyname: "iLearnings",
            position: "Data Science/AI/ML Intern",
            type: "Internship",
            location: "Pune, Maharashtra",
            workmode: "Remote",
            duration: "June 2024 - August 2024",
            short_description: "As a Data Science/AI/ML Intern at iLearnings, I worked on analytics and automation projects aimed at optimizing operations for EdTech clients. I built a data dashboard, developed an AI-powered chatbot, and collaborated cross-functionally to drive results.",
            responsibility: "Designed and developed a Power BI dashboard to analyze 5,000+ sales transactions, enabling data-driven decision-making. Streamlined data workflows and performed data preprocessing, improving analysis efficiency by 25%. Built a course inquiry chatbot using Python and Scikit-learn, automating 80% of customer support queries. Collaborated with product, tech, and analytics teams to align technical deliverables with business goals.",
            achievement_and_impact: "Increased revenue by 15% by delivering actionable insights through the Power BI dashboard. Reduced manual support workload by 30% using an AI-powered chatbot. The chatbot reduced manual workload and increased customer service efficiency.",
            tech: ["Python", "Numpy", "Pandas", "HTML", "CSS", "JavaScript", "Flask", "Scikit-learn"],
            certification: "https://drive.google.com/file/d/1hQcubcgTCOnOFcqLcw6CGCEttpmaS1Ts/view?usp=sharing",
        },
        {
            id: 3,
            thumbnail: "/thumbnail/edunetfoundation.png",
            companyname: "Edunet Foundation",
            position: "AI Cloud Intern",
            type: "Internship",
            location: "Bangalore, Karnataka",
            workmode: "Remote",
            duration: "June 2024 - July 2024",
            short_description: "This internship focused on applying AI concepts and cloud computing tools in real-world projects, including time-series forecasting and workflow automation for data processing.",
            responsibility: "Explored AI and cloud technologies, gaining hands-on experience with IBM Cloud and foundational AI models. Conducted time-series forecasting using Python to predict trends, improving analysis accuracy by 15%. Built and tested workflows for real-world data processing, focusing on data cleaning, model deployment, and improving project delivery timelines by 10%. Collaborated with peers on AI-driven projects, enhancing technical knowledge and teamwork skills.",
            achievement_and_impact: "Increased forecasting accuracy by 15% through optimized Python models. Reduced project delivery timelines by 10% by streamlining data workflows. Improved cross-team collaboration in AI-driven project execution.",
            tech: ["Python", "Numpy", "Pandas", "Matplotlib", "Machine Learning", "Scikit-learn", "IBM cloud", "Data Cleaning", "Data Analysis"],
            certification: "https://drive.google.com/file/d/1POR9J0dQ9YLRczckdh8lcLsyLT-rxQXv/view?usp=sharing",
        },

    ]

    const [activeCardId, setActiveCardId] = useState(null);

    const internshipContainerHeaderRef = useRef(null);
    const internshipContentRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                internshipContainerHeaderRef.current.querySelector('h2'),
                { opacity: 0, y: 50, duration: 1 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            )
            tl.fromTo(
                internshipContainerHeaderRef.current.querySelectorAll('p'),
                { opacity: 0, y: 50, duration: 0.5 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
            )
            gsap.from(
                internshipContentRef.current,
                {
                    scrollTrigger: {
                        trigger: internshipContentRef.current,
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
            <div className={styles.internship_page}>
                <div className={styles.internship_page_container}>
                    <div className={styles.internship_page_container_header} ref={internshipContainerHeaderRef}>
                        <h2 className={styles.internship_page_container_header_h2}>Experience</h2>
                        <div>
                            <p>
                                Internships and professional experiences have played a significant role in shaping my technical expertise and problem-solving approach. They have provided me with the opportunity to work on real-world applications, collaborate with teams, and build solutions that create practical impact beyond academic learning.
                            </p>
                            <p>
                                Through these experiences, I’ve gained hands-on exposure to AI automation, OCR systems, desktop application development, REST APIs, and modern web technologies. Working in professional environments has strengthened my ability to design scalable solutions, optimize workflows, and adapt quickly to new technologies and challenges.   
                            </p>
                            <p>
                                I’ve contributed to projects involving intelligent invoice processing systems, image preprocessing for OCR accuracy improvement, AI-powered data extraction pipelines, responsive frontend applications, and full-stack development. These experiences have not only enhanced my technical skills but also improved my communication, collaboration, and ability to work efficiently in fast-paced environments.
                            </p>
                            <p>
                                Below, you’ll find a showcase of my professional experience and projects — highlighting the technologies I’ve worked with, the solutions I’ve developed, and the valuable learning gained throughout my journey.
                            </p>
                        </div>
                    </div>
                    <div className={styles.internship_page_container_card} ref={internshipContentRef}>
                        {internships.map(internship => (
                            <div className={styles.internship_page_container_card_details} key={internship.id}>
                                <div className={styles.internship_page_container_card_img}>
                                    <img src={internship.thumbnail} alt="" />
                                </div>
                                <div className={styles.intership_card_intro}>
                                    <h2>{internship.position},</h2>
                                    <h4>{internship.companyname}</h4>
                                    <div className={styles.intership_card_company_details}>
                                        <p>{internship.location}</p>
                                        <p>({internship.workmode})</p>
                                    </div>
                                    <p>{internship.duration}</p>
                                    <p>{internship.short_description}</p>
                                </div>
                                <div
                                    className={styles.more_details_btn}
                                    onClick={() => setActiveCardId(prev => prev === internship.id ? null : internship.id)}
                                >
                                    <p>More Details</p>
                                    {activeCardId === internship.id ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

                                </div>
                                <div
                                    className={styles.internship_card_key_responsibilty}
                                    style={{ display: activeCardId === internship.id ? "flex" : "none" }}
                                >
                                    <h4><MdOutlineDescription />Key Responsitbility:</h4>
                                    <ul>
                                        {internship.responsibility
                                            .split('. ')
                                            .filter(sentence => sentence.trim() !== '')
                                            .map((point, index) => (
                                                <li key={index} className={styles.responsibility_details}>{point.trim().endsWith('.') ? point.trim() : point.trim() + '.'}</li>
                                            ))}
                                    </ul>
                                </div>

                                <div
                                    className={styles.internship_card_impact}
                                    style={{ display: activeCardId === internship.id ? "flex" : "none" }}
                                >
                                    <h4><MdOutlineDescription />Achievement & Impact:</h4>
                                    <ul>
                                        {internship.achievement_and_impact
                                            .split('. ')
                                            .filter(sentence => sentence.trim() !== '')
                                            .map((point, index) => (
                                                <li key={index} className={styles.impact_details}>{point.trim().endsWith('.') ? point.trim() : point.trim() + '.'}</li>
                                            ))}
                                    </ul>
                                </div>
                                <div
                                    className={styles.internship_tech_and_link_container}
                                    style={{ display: activeCardId === internship.id ? "flex" : "none" }}
                                >
                                    <div className={styles.internship_tech_container}>
                                        <h4><GrTechnology />Tech:</h4>
                                        <div className={styles.tech_container}>
                                            {internship.tech.map(item => {
                                                const formattedItem = item.toLowerCase().replace(/[\s-]+/g, '');
                                                return (
                                                    <p key={item}>
                                                        <img src={`./icon/${formattedItem}.png`} />
                                                        {item}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {internship.certification && (
                                        <div className={styles.internship_link_container}>
                                            <h4><FaLink />Links:</h4>
                                            <div className={styles.links}>
                                                <a href={internship.certification}><FaExternalLinkAlt />Certificate</a>
                                                {internship.dashboard ? (<a href={internship.dashboard} target='_blank'><FaExternalLinkAlt />Live Dashboard</a>) : (<div></div>)}
                                            </div>
                                        </div>   
                                    )}
                                </div>
                                <div className={styles.employment_type}>
                                    {internship.type}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <Outlet />
        </>
    )
}

export default Internship