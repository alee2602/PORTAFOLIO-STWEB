import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProjectSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <AboutSection /> 
      <ProjectSection/>
      <Footer/>
    </div>
  );
};