import React from 'react';
import styles from '@/styles/components/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <section id="contact">
            <div className={styles.footer}>
                <h2 className={styles.contactTitle}>Connect with me!</h2>
                <div className={styles.footerContent}>
                    <div className={styles.socialLinks}>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.copyRight}>
                        © 2024 Mónica Salvatierra. All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;


