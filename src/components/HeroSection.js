import styles from '@/styles/components/herosection.module.scss';

function HeroSection(){
        return (
            <div className={styles.hero}>
            <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
            <path id="curvedPath" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text fill="#4C2A85" fontSize="54" fontWeight="bold" fontFamily="Averia Serif Libre" textAnchor="middle">
                <textPath xlinkHref="#curvedPath" startOffset="50%">
                    Greetings!
                </textPath>
                </text>
            </svg>
                <p>You're a star and the sky's the limit</p>
            </div>
        );
    }
    
export default HeroSection;