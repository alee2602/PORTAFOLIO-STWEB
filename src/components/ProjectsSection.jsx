
import ProjectCard from '@/components/ProjectCard';
import styles from '@/styles/components/projectsection.module.scss';

function ProjectSection() {

    const projects = [
        {
            image: '/svgs/kirbycssart.png',
            title: 'Kirby CSS Art',
            description: 'This project showcases a vibrant CSS art piece inspired by the popular video game character, Kirby.',
            githubLink: 'https://github.com/alee2602/LAB4-STWEB',
        },
        {
            image: '/svgs/talkiechat.png',
            title: 'Chat Client',
            description: 'Talkie is a versatile chat client designed to enhance communication with customizable themes. The project allows users to switch between different themes, offering a personalized chat experience. ',
            githubLink: 'https://github.com/alee2602/LAB5-STWEB',
        },
        {
            image: '/svgs/grammysblog.png',
            title: 'Blog Admin',
            description: 'This project is an administrative interface designed for managing a CRUD (Create, Read, Update, Delete) system for a blog dedicated to the Grammy Awards.',
            githubLink: 'https://github.com/alee2602/PROYECTO1-STWEB',
        },
        {
            image: '/path/to/image2.png',
            title: 'Restaurante Asgard',
            description: 'Restaurante Asgard is a comprehensive web application designed to manage the operations of a restaurant. This application facilitates various tasks including order management, employee scheduling, and report generation.',
            githubLink: 'https://github.com/SRV-JSPA/P2_BD',
        },
        {
            image: '/path/to/image2.png',
            title: 'Simple Calculator',
            description: 'The Simple Calculator is a straightforward web application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. ',
            githubLink: 'https://github.com/alee2602/LAB8-STWEB',
        },
    ];

    return (
        <div className={styles.projectsSection}>
            <div className={styles.contentContainer}>
                <h2 className={styles.heading}>My Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;