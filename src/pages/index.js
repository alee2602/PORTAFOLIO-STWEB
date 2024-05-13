import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ParticlesBackground from '@/components/ParticlesBackground';


export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <AboutSection /> 
    </div>
  );
};