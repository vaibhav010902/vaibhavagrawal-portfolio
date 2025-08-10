import React from 'react'
import styles from './HomePage.module.css'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

function HomePage() {
    const languages = [
        {
            skillname: "C",
            skillicon: "./icon/c.png"
        },
        {
            skillname: "C++",
            skillicon: "./icon/c++.png"
        },
        {
            skillname: "Python",
            skillicon: "./icon/python.png"
        },
        {
            skillname: "JavaScript",
            skillicon: "./icon/javascript.png"
        },
    ]
    const mllibraries = [
        {
            skillname: "Numpy",
            skillicon: "./icon/numpy.png"
        },
        {
            skillname: "Pandas",
            skillicon: "./icon/pandas.png"
        },
        {
            skillname: "Matplotlib",
            skillicon: "./icon/matplotlib.png"
        }
    ]
    const database = [
        {
            skillname: "SQL",
            skillicon: "./icon/sql.png"
        },
        {
            skillname: "MySQL",
            skillicon: "./icon/mysql.png"
        }
    ]
    const web = [
        {
            skillname: "HTML",
            skillicon: "./icon/html.png"
        },
        {
            skillname: "CSS",
            skillicon: "./icon/css.png"
        },
        {
            skillname: "React",
            skillicon: "./icon/react.png"
        },
        {
            skillname: "express",
            skillicon: "./icon/express.png"
        }
    ]
    const tools = [
        {
            skillname: "PowerBI",
            skillicon: "./icon/powerbi.png"
        },
        {
            skillname: "Github",
            skillicon: "./icon/github.png"
        }
    ]
    const services = [
        {
            servicename: "Data Analysis",
            icon: "./icon/dataanalysis.png",
            decription: "Get more value from your data with prediction models and machine learning techniques, for example by predicting behavior or targeting the right customer."
        },
        {
            servicename: "Data Cleaning",
            icon: "./icon/datacleaning.png",
            decription: "Ensure your data is accurate, consistent, and ready for analysis by removing errors, handling missing values, and standardizing formats — the foundation for reliable insights."
        },
        {
            servicename: "Data Visualization",
            icon: "./icon/datavisualization.png",
            decription: "Turn raw data into intuitive charts and graphs that reveal patterns, trends, and outliers at a glance — making complex insights easier to understand and act on."
        },
        {
            servicename: "Dashboard",
            icon: "./icon/dashboard.png",
            decription: "Dashboards show the most recent results in an interactive way. By clicking and drilling, you will examine trends and patterns yourself."
        },
        {
            servicename: "Front End Development",
            icon: "./icon/frontend.png",
            decription: "Design and build interactive, user-friendly interfaces for web applications, focusing on seamless user experience and responsive performance."
        }
    ]

    const leftContainerContent = useRef(null);
    const rightContainerContent = useRef(null);
    const aboutSectionRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null)
    const homepageRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            leftContainerContent.current.querySelectorAll("p"),
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, delay: 2., duration: 1, stagger: 0.5 }
        )

        tl.fromTo(
            rightContainerContent.current.querySelectorAll("p"),
            // rightContainerContent.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
        )

        // tl.fromto
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // About Me Section animation
            gsap.from("p", {
                scrollTrigger: {
                    trigger: aboutSectionRef.current,
                    start: "top 70%",
                    // markers: true,
                },
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out",
            });

            // Education Section animation
            gsap.from(educationRef.current, {
                scrollTrigger: {
                    trigger: educationRef.current,
                    start: "top 70%",
                    // markers: true
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
            });

            // Skills Section animation
            gsap.from(skillsRef.current, {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 150%",
                    // end: "top -250%",
                    // end: "top 200%",
                    // markers: true,
                    scrub: 2,
                    // pin: true
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });
        }, aboutSectionRef);

        return () => ctx.revert(); // Clean up on unmount
    }, []);



    return (
        <>
            <div className={styles.homepage } ref={homepageRef}>
                <div className={styles.homepage_container_1}>
                    <div className={styles.left_container}>
                        <span ref={leftContainerContent}>
                            <p>Data Analyst: Analyzing and visualizing data to make better and informed business decisions.</p><br />
                            <p>Web Developer: Building responsive, user-friendly websites and applications using modern web technologies.</p>
                        </span>
                    </div>
                    <div className={styles.right_container} >
                        <span ref={rightContainerContent}>
                            <p>Hi there!</p>
                            <p>I am Vaibhav</p>
                            <p>Agrawal.</p>
                        </span>
                    </div>
                </div>
                <div className={styles.homepage_container_2} ref={aboutSectionRef}>
                    <div className={styles.about_me_container} >
                        <div className={styles.about_me_container_introduction}>
                            <div className={styles.about_me_content_header}>
                                <h2 style={{ fontSize: "60px" }}>About Me</h2>
                            </div>
                            <div className={styles.about_me_content_container}>
                                <div className={styles.about_me_content_content}>
                                    <p>I’m Vaibhav, an aspiring Data Analyst and Software Developer with a strong foundation in Python, Power BI, SQL, and web development. I’m a recent graduate student of Bachelor’s degree in Electronics Engineering from Madhav Institute of Technology and Science, Gwalior.</p>
                                    <p>I’m passionate about transforming raw data into meaningful insights — much like solving real-life puzzles. From building interactive dashboards to developing chatbots and automating reports, I enjoy applying data and technology to solve complex business challenges.</p>
                                    <p>My experience includes working on real-world projects such as sales performance analysis, marketing trend visualization, and building AI-powered course enquiry chatbots. These projects have helped me sharpen both my analytical and full-stack development skills.</p>
                                    <p>I take pride in blending logic with creativity to design solutions that are not only functional but also user-friendly.</p>
                                    <p>Have an interesting data challenge or web idea? Let’s connect!<br />📧 Reach out to me anytime at vaibhavagrawal1902@gmail.com</p>
                                </div>
                                <div className={styles.about_me_image_container}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_me_education_container} ref={educationRef}>
                            <div className={styles.about_me_education_container_header}>
                                <h2 style={{ fontSize: "60px" }}>Education</h2>
                            </div>
                            <div className={styles.about_me_education_container_content}>
                                <div className={styles.education_detail_container}>
                                    <div className={styles.education_img}>
                                        <img src="./images/mits.png" alt="" srcset="" />
                                    </div>
                                    <div className={styles.education_details}>
                                        <h3>Madhav Institute of Technology & Science, Gwalior</h3>
                                        <p><i>Bachelor of Technology in Electronics Engineering</i></p>
                                        <h4>7.50 CGPA</h4>
                                    </div>
                                </div>
                                <div className={styles.education_detail_container}>
                                    <div className={styles.education_img}>
                                        <img src="./images/cjs.png" alt="" srcset="" />
                                    </div>
                                    <div className={styles.education_details}>
                                        <h3>Christ Jyoti Senior Secondary School, Satna</h3>
                                        <p><i>XII CBSE Board in PCM</i></p>
                                        <h4>82.8%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_me_skills_container} ref={skillsRef}>
                            <div className={styles.about_me_skills_container_header}>
                                <h2 style={{ fontSize: "60px" }}>Skills</h2>
                            </div>
                            <div className={styles.about_me_skills_container_content}>
                                <div className={styles.skills_language_container}>
                                    <div className={styles.skills_language_container_header}>
                                        <h4>Programming Languages:</h4>
                                    </div>
                                    <div className={styles.skills_language_container_content}>
                                        {languages.map(item => (
                                            <div key={item.skillname} className={styles.about_me_skills_language}>
                                                <div className={styles.about_me_skills_img}>
                                                    <img src={item.skillicon} alt="" />
                                                </div>
                                                <div className={styles.about_me_skills_name}>
                                                    <span>{item.skillname}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.skills_language_container}>
                                    <div className={styles.skills_language_container_header}>
                                        <h4>ML Libraries:</h4>
                                    </div>
                                    <div className={styles.skills_language_container_content}>
                                        {mllibraries.map(item => (
                                            <div key={item.skillname} className={styles.about_me_skills_language}>
                                                <div className={styles.about_me_skills_img}>
                                                    <img src={item.skillicon} alt="" />
                                                </div>
                                                <div className={styles.about_me_skills_name}>
                                                    <span>{item.skillname}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.skills_language_container}>
                                    <div className={styles.skills_language_container_header}>
                                        <h4>Web Technologies:</h4>
                                    </div>
                                    <div className={styles.skills_language_container_content}>
                                        {web.map(item => (
                                            <div key={item.skillname} className={styles.about_me_skills_language}>
                                                <div className={styles.about_me_skills_img}>
                                                    <img src={item.skillicon} alt="" />
                                                </div>
                                                <div className={styles.about_me_skills_name}>
                                                    <span>{item.skillname}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.skills_language_container}>
                                    <div className={styles.skills_language_container_header}>
                                        <h4>Database:</h4>
                                    </div>
                                    <div className={styles.skills_language_container_content}>
                                        {database.map(item => (
                                            <div key={item.skillname} className={styles.about_me_skills_language}>
                                                <div className={styles.about_me_skills_img}>
                                                    <img src={item.skillicon} alt="" />
                                                </div>
                                                <div className={styles.about_me_skills_name}>
                                                    <span>{item.skillname}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.skills_language_container}>
                                    <div className={styles.skills_language_container_header}>
                                        <h4>Tools:</h4>
                                    </div>
                                    <div className={styles.skills_language_container_content}>
                                        {tools.map(item => (
                                            <div key={item.skillname} className={styles.about_me_skills_language}>
                                                <div className={styles.about_me_skills_img}>
                                                    <img src={item.skillicon} alt="" />
                                                </div>
                                                <div className={styles.about_me_skills_name}>
                                                    <span>{item.skillname}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.homepage_container_3}>
                    <div className={styles.services_container}>
                        <div className={styles.services_container_header}>
                            <h2 style={{ fontSize: "60px" }}>Services</h2>
                        </div>
                        <div className={styles.services_container_content}>
                            {services.map(item => (
                                <div className={styles.services_container_content_container}>
                                    <div className={styles.services_container_content_container_img}>
                                        <img src={item.icon} alt={item.servicename} />
                                    </div>
                                    <div className={styles.services_container_content_container_detailes}>
                                        <div className={styles.services_container_content_container_service_name}>
                                            <h2>{item.servicename}</h2>
                                        </div>
                                        <div className={styles.services_container_content_container_description}>
                                            <p>{item.decription}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Outlet />
        </>
    )
}

export default HomePage