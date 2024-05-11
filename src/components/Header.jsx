import Link from 'next/link';
import styles from '@/styles/components/header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <h3><span>:</span>alvatierra</h3>
            </div>
            <nav className={styles.nav}>
            <Link href="#home" className={styles.link}>Home</Link>
            <Link href="#about" className={styles.link}>About Me</Link>
            <Link href="#projects" className={styles.link}>Projects</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
            </nav>
        </div>
        );
    }

export default Header;