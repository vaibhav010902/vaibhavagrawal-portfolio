import React from 'react'
import styles from './Footer.module.css'

function Footer() {

    const connect = [
        {
            name: "mail",
            icon: "./connecticon/email.png"
        },
        {
            name: "linkedin",
            icon: "./connecticon/linkedin.png"
        },
        {
            name: "github",
            icon: "./connecticon/github.png"
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
                            <img src={item.icon} id={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer