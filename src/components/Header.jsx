import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/header.module.scss';

function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <h3><span>:</span>alvatierra</h3>
            </div>
            <nav className={styles.nav}>
            <Link href="#home" className={`${styles.link} ${activeSection === 'home' ? styles.active : ''}`}>Home</Link>
            <Link href="#about" className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}>About Me</Link>
            <Link href="#projects" className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}>Projects</Link>
            <Link href="#contact" className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}>Contact</Link>
            </nav>
        </div>
        );
    }
export default Header;