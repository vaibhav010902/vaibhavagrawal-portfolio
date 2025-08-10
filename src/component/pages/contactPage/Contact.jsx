import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <>
            <div className={styles.contact_page}>
                <div className={styles.contact_page_container}>
                    <div className={styles.contact_page_left_container}>
                        <div className={styles.contact_page_left_container_header}>
                            <h1>Let's get</h1>
                            <h1>connect</h1>
                        </div>
                        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            Whether you have a question, an opportunity, a project idea, or just want to say hi — my inbox is always open.
                            I’ll do my best to get back to you as soon as possible.</p>
                        <p>Feel free to reach out to me via email or connect with me on social media.</p>
                        <div className={styles.contact_page_left_container_socials}>
                            <a href="mailto:vaibhavagrawal1902@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="" />Email</a>
                            <a href="https://www.linkedin.com/in/vaibhav-agrawal-1b0b4a1b2/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />LinkedIn</a>
                            <a href="https://github.com/vaibhavagrawal1902" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/4926/4926624.png" alt="" />GitHub</a>
                            <a href="https://twitter.com/VaibhavAgr57014" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/25/25660.png" alt="" />Twitter</a>
                            
                        </div>
                    </div>
                    <div className={styles.contact_page_right_container}>
                        <div className={styles.contact_form_container}>
                            <h2>Get in Touch</h2>
                            <div className={styles.contact_form}>
                                <div className={styles.contact_form_fullname_container}>
                                    <div className={styles.contact_form_firstname_field}>
                                        <label htmlFor="firstname">First Name</label>
                                        <input type="text" name='firstname' className={styles.firstname_field} />
                                    </div>
                                    <div className={styles.contact_form_lastname_field}>
                                        <label htmlFor="lastname">Last Name</label>
                                        <input type="text" name='lastname' className={styles.lastname_field} />
                                    </div>
                                </div>
                                <div className={styles.contact_form_email_container}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' className={styles.email_field} />
                                </div>
                                <div className={styles.contact_form_purpose_container}>
                                    <label htmlFor="purpose">Purpose</label>
                                    <textarea type="textarea" name='purpose' className={styles.purpose_field} />
                                </div>
                                <div className={styles.contact_form_btns_container}>
                                    <button>Send Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact