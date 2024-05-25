import styles from '@/styles/components/skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SkillsSection = ({ skillType, toggleVisibility, isVisible }) => {
const hardSkills = [
    {
    category: 'Programming Languages',
    skills: [
        { name: 'Python', link: 'https://www.python.org/doc/', svg: '/svgs/python.svg' },
        { name: 'Java', link: 'https://docs.oracle.com/en/java/', svg: '/svgs/java.svg' },
        { name: 'Kotlin', link: 'https://kotlinlang.org/docs/home.html', svg: '/svgs/kotlin.svg' },
        { name: 'C++', link: 'https://cplusplus.com/doc/', svg: '/svgs/cplusplus.svg' },
        { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', svg: '/svgs/javascript.svg' },
        { name: 'PHP', link: 'https://www.php.net/docs.php', svg: '/svgs/php.svg' },
            ],
        },
    {
    category: 'Web Development',
    skills: [
        { name: 'Next.js', link: 'https://nextjs.org/docs', svg: '/svgs/nextjs.svg' },
        { name: 'Node.js', link: 'https://nodejs.org/en/docs/', svg: '/svgs/nodejs.svg' },
        { name: 'React.js', link: 'https://reactjs.org/docs/getting-started.html', svg: '/svgs/react.svg' },
        { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', svg: '/svgs/html5.svg' },
        { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', svg: '/svgs/css.svg' },
        { name: 'SASS', link: 'https://sass-lang.com/documentation', svg: '/svgs/sass.svg' },
        { name: 'Express.js', link: 'https://expressjs.com/en/starter/installing.html', svg: '/svgs/express.svg' },
        { name: 'Docker', link: 'https://docs.docker.com/', svg: '/svgs/docker.svg' },
            ],
        },
    {
    category: 'Database',
    skills: [
        { name: 'MySQL', link: 'https://dev.mysql.com/doc/', svg: '/svgs/mysql.svg' },
        { name: 'PostgreSQL', link: 'https://www.postgresql.org/docs/', svg: '/svgs/postgresql.svg' },
            ],
        },
    {
    category: 'Data Visualization',
    skills: [
        { name: 'Power BI', link: 'https://docs.microsoft.com/en-us/power-bi/', svg: '/svgs/powerbi.svg' },
        { name: 'Tableau', link: 'https://www.tableau.com/learn/training', svg: '/svgs/tableau.svg' },
            ],
        },
    ];

const softSkills = [
    { name: 'Communication', description: 'Effective speaking, Active listening' },
    { name: 'Teamwork', description: 'Collaboration, Conflict resolution' },
    { name: 'Problem Solving', description: 'Critical thinking, Creativity' },  ];

    return isVisible ? (
        <div className={styles.skillsSection}>
            <div className={styles.headerContainer}>
                <h2>My {skillType === 'hard' ? 'Hard' : 'Soft'} Skills</h2>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    onClick={toggleVisibility}
                    className={`${styles.chevronIcon}`}
                />
            </div>
            <div className={styles.skillsContainer}>
                {skillType === 'hard' ? (
                    hardSkills.map((category) => (
                        <div key={category.category} className={styles.skillCategory}>
                            <h3>{category.category}</h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill) => (
                                    <a
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={skill.name}
                                        className={styles.skillIconContainer}
                                        data-tooltip={skill.name}
                                    >
                                        <img src={skill.svg} alt={`${skill.name} logo`} className={styles.skillIcon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    softSkills.map((skill) => (
                        <div className={styles.skill} key={skill.name}>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    ) : (
        <div className={styles.skillsToggle}>
            <FontAwesomeIcon
                icon={faChevronUp}
                onClick={toggleVisibility}
                className={styles.chevronIcon}
            />
        </div>
    );
};

export default SkillsSection;