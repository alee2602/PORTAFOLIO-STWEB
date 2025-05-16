import styles from '@/styles/components/herosection.module.scss';

function HeroSection(){
        return (
            <div className={styles.hero}>
                <section id="home">
                <h1 className={styles.signatureText}>Mónica S.</h1>
                <div className={styles['text-container']}>
                    <div>You&apos;re a star and the</div>
                    <div>sky&apos;s the limit</div>
                </div>
                </section>
            </div>
        );
    }
    
export default HeroSection;