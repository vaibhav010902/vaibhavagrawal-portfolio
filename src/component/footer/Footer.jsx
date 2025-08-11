import React from 'react'
import styles from './Footer.module.css'

function Footer() {

    const connect = [
        {
            name: "mail",
            icon: "./connecticon/email.png",
            link: "mailto:vaibhavagrawal1902@gmail.com"
        },
        {
            name: "linkedin",
            icon: "./connecticon/linkedin.png",
            link: "https://www.linkedin.com/in/vaibhavagrawal1902"
        },
        {
            name: "github",
            icon: "./connecticon/github.png",
            link: "https://github.com/vaibhav010902"
        }
    ]
    return (
        <div className={styles.homepage_container_4}>
            <div className={styles.connection_container}>
                <div className={styles.connection_container_header}>
                    <h2>Let's Connect</h2>
                </div>
                <div className={styles.connection_container_content}>
                    {connect.map(item => (
                        <div className={styles.connection_container_content_icon}>
                            <a href={item.link} target='_blank'><img src={item.icon} id={item.name} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer