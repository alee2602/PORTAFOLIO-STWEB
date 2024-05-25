import Image from 'next/image';
import styles from '@/styles/components/projectcard.module.scss';

function ProjectCard({ image, title, description, githubLink }) {
    return (
        <div className={styles.card}>
            <Image
                    src={image}
                    alt={`${title} logo`}
                    width={300}  
                    height={230}
                    className={styles.image}
                />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
