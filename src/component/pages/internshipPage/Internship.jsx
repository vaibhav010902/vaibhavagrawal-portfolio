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
function Internship() {

    const API_URL = "http://127.0.0.1:5000/api/project"

    const internships = [
        {
            id: 1,
            thumbnail: "/thumbnail/ilearnings.jpg",
            companyname: "iLearnings",
            position: "Data Science/AI/ML Intern",
            location: "Pune, Maharashtra",
            workmode: "Remote",
            duration: "June 2024 - August 2024",
            short_description: "As a Data Science/AI/ML Intern at iLearnings, I worked on analytics and automation projects aimed at optimizing operations for EdTech clients. I built a data dashboard, developed an AI-powered chatbot, and collaborated cross-functionally to drive results.",
            responsibility: "Designed and developed a Power BI dashboard to analyze 5,000+ sales transactions, enabling data-driven decision-making. Streamlined data workflows and performed data preprocessing, improving analysis efficiency by 25%. Built a course inquiry chatbot using Python and Scikit-learn, automating 80% of customer support queries. Collaborated with product, tech, and analytics teams to align technical deliverables with business goals.",
            achievement_and_impact: "Increased revenue by 15% by delivering actionable insights through the Power BI dashboard. Reduced manual support workload by 30% using an AI-powered chatbot. The chatbot reduced manual workload and increased customer service efficiency.",
            tech: ["Python", "Numpy", "Pandas", "HTML", "CSS", "JavaScript", "Flask", "Scikit-learn"],
            certification: "https://github.com/vaibhav010902/Ed-Tech-Chatbot",
        },
        {
            id: 2,
            thumbnail: "/thumbnail/edunetfoundation.png",
            companyname: "Edunet Foundation",
            position: "AI Cloud Intern",
            location: "Bangalore, Karnataka",
            workmode: "Remote",
            duration: "June 2024 - July 2024",
            short_description: "As a Data Science/AI/ML Intern at iLearnings, I worked on analytics and automation projects aimed at optimizing operations for EdTech clients. I built a data dashboard, developed an AI-powered chatbot, and collaborated cross-functionally to drive results.",
            responsibility: "Designed and developed a Power BI dashboard to analyze 5,000+ sales transactions, enabling data-driven decision-making. Streamlined data workflows and performed data preprocessing, improving analysis efficiency by 25%. Built a course inquiry chatbot using Python and Scikit-learn, automating 80% of customer support queries. Collaborated with product, tech, and analytics teams to align technical deliverables with business goals.",
            achievement_and_impact: "Increased revenue by 15% by delivering actionable insights through the Power BI dashboard. Reduced manual support workload by 30% using an AI-powered chatbot. The chatbot reduced manual workload and increased customer service efficiency.",
            tech: ["Python", "Numpy", "Pandas", "Matplotlib", "Machine Learning", "Scikit-learn", "IBM cloud", "Data Cleaning", "Data Analysis"],
            certification: "https://github.com/vaibhav010902/Ed-Tech-Chatbot",
        },

    ]

    const [activeCardId, setActiveCardId] = useState(null);



    return (
        <>
            <div className={styles.internship_page}>
                <div className={styles.internship_page_container}>
                    <div className={styles.internship_page_container_header}>
                        <h2 style={{ fontSize: "100px" }}>Internship</h2>
                        <div>
                            <p>
                                Internships have played a crucial role in bridging the gap between classroom learning and practical industry exposure.
                                They’ve given me the chance to step into real-world environments, collaborate with professionals, and solve challenges that can’t be taught through textbooks alone.
                            </p>
                            <p>
                                Each internship I’ve undertaken has contributed uniquely to my personal and professional growth.
                                From understanding workplace dynamics to gaining hands-on experience in tools and technologies, these opportunities have helped shape my mindset, sharpen my problem-solving abilities, and solidify my passion for building impactful solutions.
                            </p>
                            <p>
                                I’ve worked on diverse projects — from data analysis dashboards and machine learning models to full-stack web development and technical documentation.
                                These experiences have not only helped me enhance my technical skill set but also improved my communication, time management, and adaptability in fast-paced environments.
                            </p>
                            <p>
                                Below, you’ll find a showcase of the internships I’ve completed so far — highlighting the organizations I collaborated with, the projects I worked on, and the key takeaways I’ve gained from each experience.
                            </p>
                        </div>
                    </div>
                    <div className={styles.internship_page_container_card}>
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
                                    <div className={styles.internship_link_container}>
                                        <h4><FaLink />Links:</h4>
                                        <div className={styles.links}>
                                            <a href={internship.certification}><FaExternalLinkAlt />Certificate</a>
                                            {internship.dashboard ? (<a href={internship.dashboard} target='_blank'><FaExternalLinkAlt />Live Dashboard</a>) : (<div></div>)}
                                        </div>
                                    </div>
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