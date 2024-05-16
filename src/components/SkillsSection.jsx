import styles from '@/styles/components/skills.module.scss';

function SkillsSection ({skillType}){

    return (
        <div className={styles['skills-section']}>
        <h2>My {skillType === 'hard' ? 'Hard' : 'Soft'} Skills</h2>
        <div className={styles['skills-container']}>
            {skillType === 'hard' ? (
            <>
                <div className={styles.skill}>
                <h3>Programming Languages</h3>
                <p>Python, Java, Kotlin, C++, JavaScript, PHP</p>
                </div>
                <div className={styles.skill}>
                <h3>Web Development</h3>
                <p>Next.js, Node.js, React.js, HTML, CSS, SASS, Express.js</p>
                </div>
                <div className={styles.skill}>
                <h3>Database</h3>
                <p>MySQL, PostgreSQL</p>
                </div>
                <div className={styles.skill}>
                <h3>Data Visualization</h3>
                <p>Power BI, Tableu</p>
                </div>
            </>
            ) : (
            <>
                <div className={styles.skill}>
                <h3>Communication</h3>
                <p>Effective speaking, Active listening</p>
                </div>
                <div className={styles.skill}>
                <h3>Teamwork</h3>
                <p>Collaboration, Conflict resolution</p>
                </div>
                <div className={styles.skill}>
                <h3>Problem Solving</h3>
                <p>Critical thinking, Creativity</p>
                </div>
            </>
            )}
        </div>
        </div>
    );
}

export default SkillsSection;