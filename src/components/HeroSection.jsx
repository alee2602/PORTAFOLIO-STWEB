import styles from '@/styles/components/herosection.module.scss';

function HeroSection(){
        return (
            <div className={styles.hero}>
                <section id="home">
                <svg width="70%" height="200" viewBox="0 0 1000 50"  xmlns="http://www.w3.org/2000/svg">
                <path id="curvedPath" fill="transparent" d="M100,150 C400,0 600,0 900,150" />
                <text>
                    <textPath xlinkHref="#curvedPath" startOffset="50%">
                        Greetings !
                    </textPath>
                    </text>
                </svg>
                <div className={styles['text-container']}>
                    <div>You're a star and the</div>
                    <div>sky's the limit</div>
                </div>
                </section>
            </div>
        );
    }
    
export default HeroSection;