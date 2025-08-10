import React from 'react'
import styles from './ProjectCard.module.css'
import { FaLink } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDescription } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project}) {
    return (
        <div className={styles.project_container_project_card} id={project.id}>
            <div className={styles.project_container_project_card_img}>
                <img src={project.thumbnail} alt="" />
            </div>
            <div className={styles.project_container_project_card_details}>
                <h2 className={styles.project_title}>{project.title}</h2>
                <div className={styles.project_container_project_card_details_content}>
                    <div className={styles.project_description_container}>
                        <h4><MdOutlineDescription />Description:</h4>
                        <ul>
                            {project.description
                                .split('. ')
                                .filter(sentence => sentence.trim() !== '')
                                .map((point, index) => (
                                    <li key={index} className={styles.project_description}>{point.trim().endsWith('.') ? point.trim() : point.trim() + '.'}</li>
                                ))}
                        </ul>
                    </div>
                    <div className={styles.project_tech_and_link_container}>
                        <div className={styles.project_tech_container}>
                            <h4><GrTechnology />Tech:</h4>
                            <div className={styles.tech_container}>
                                {project.tech.map(item => {
                                    const formattedItem = item.toLowerCase().replace(/[\s-]+/g, '');
                                    return (
                                        <p key={item}>
                                            <img src={`./icon/${formattedItem}.png`} alt={item} />
                                            {item}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={styles.project_link_container}>
                            <h4><FaLink />Links:</h4>
                            <div className={styles.links}>
                                <a href={project.github}><FaExternalLinkAlt />Github</a>
                                {project.dashboard ? (<a href={project.dashboard} target='_blank'><FaExternalLinkAlt />Live Dashboard</a>) : (<div></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className={styles.project_container_project_card} id={project.id}>
        //     <h2 className={styles.project_title}>{project.title}</h2>
        //     <div className={styles.project_description_container}>
        //         <h4><MdOutlineDescription />Description:</h4>
        //         <ul>
        //             {project.description
        //                 .split('. ')
        //                 .filter(sentence => sentence.trim() !== '')
        //                 .map((point, index) => (
        //                     <li key={index} className={styles.project_description}>{point.trim().endsWith('.') ? point.trim() : point.trim() + '.'}</li>
        //                 ))}
        //         </ul>
        //     </div>
        //     <div className={styles.project_tech_container}>
        //         <h4><GrTechnology />Tech:</h4>
        //         <div className={styles.tech_container}>
        //             {project.tech.map(item => {
        //                 const formattedItem = item.toLowerCase().replace(/[\s-]+/g, '');
        //                 return (
        //                     <p key={item}>
        //                         <img src={`./icon/${formattedItem}.png`} alt={item} />
        //                         {item}
        //                     </p>
        //                 );
        //             })}
        //         </div>
        //     </div>
        //     <div className={styles.project_link_container}>
        //         <h4><FaLink />Links:</h4>
        //         <div className={styles.links}>
        //             <a href={project.github}><FaExternalLinkAlt />Github</a>
        //             {project.dashboard ? (<a href={project.dashboard} target='_blank'><FaExternalLinkAlt />Live Dashboard</a>) : (<div></div>)}
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProjectCard