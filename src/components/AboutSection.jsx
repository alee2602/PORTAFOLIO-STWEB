import React, { useState } from 'react';
import SkillsSection from '@/components/SkillsSection';
import styles from '@/styles/components/aboutme.module.scss';
import Image from 'next/image';

function AboutSection() {
    const [showSkills, setShowSkills] = useState(false);
    const [skillType, setSkillType] = useState('');

    const handleShowSkills = (type) => {
        setSkillType(type);
        setShowSkills(true);
    };

    const toggleSkillsVisibility = () => {
        setShowSkills(prev => !prev);
    };

    return (
            <div className={styles['about-section']}>
                <section id="about">
                <div className={styles['content-container']}>
                    <div className={styles['header-text']}>
                    <h1>Who am I?</h1>
                    </div>
                    <div className={styles['content-wrapper']}>
                        <div className={styles.picture}>
                        <Image
                            src="/pic.jpg"
                            alt="Monica's Profile Picture" 
                            width={200}  
                            height={200}
                            />
                        </div>
                        <div className={styles['about-text']}>
                            <p>I&apos;m a passionate fourth-year Computer Science student with a knack for both front-end and back-end web development. My journey in tech has led me to a fascinating crossroad where design meets functionality, enabling me to craft seamless digital experiences.</p>
                            <br />
                            <p>Beyond the world of web development, I&apos;m also captivated by the boundless possibilities within data science.</p>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <button className={styles['skill-button']} onClick={() => handleShowSkills('hard')}>Hard Skills</button>
                        <button className={styles['skill-button']} onClick={() => handleShowSkills('soft')}>Soft Skills</button>
                    </div>
                    {showSkills && <SkillsSection skillType={skillType} toggleVisibility={toggleSkillsVisibility} isVisible={showSkills} />}
                </div>
                </section>
            </div>
    );
}

export default AboutSection;

