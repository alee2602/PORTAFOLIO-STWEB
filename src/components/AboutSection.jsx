import React, { useState } from 'react';
import SkillsSection from '@/components/SkillsSection';
import styles from '@/styles/components/aboutme.module.scss';

function AboutSection() {
    const [showSkills, setShowSkills] = useState(false);
    const [skillType, setSkillType] = useState('');

    const handleShowSkills = (type) => {
    setSkillType(type);
    setShowSkills(true);
    };

    return (
    <div className={styles['about-section']}>
        <div className={styles['content-container']}>
        <div className={styles['header-text']}>
            <h1>Hello! I'm Mónica</h1>
        </div>
        <div className={styles['content-wrapper']}>
            <div className={styles.picture}>
            <img src="/pic.jpg" alt="Monica's Profile Picture" />
            </div>
            <div className={styles['about-text']}>
            <p>I’m a passionate third-year Computer Science student with a knack for both front-end and back-end web development. My journey in tech has led me to a fascinating crossroad where design meets functionality, enabling me to craft seamless digital experiences.</p>
            <br />
            <p>Beyond the world of web development, I'm also captivated by the boundless possibilities within data science.</p>
            </div>
        </div>
        <div className={styles.skills}>
            <button className={styles['skill-button']} onClick={() => handleShowSkills('hard')}>Hard Skills</button>
            <button className={styles['skill-button']} onClick={() => handleShowSkills('soft')}>Soft Skills</button>
        </div>
        {showSkills && <SkillsSection skillType={skillType} />}
        </div>
    </div>
    );
}

export default AboutSection;

