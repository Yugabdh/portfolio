import AboutSection from '@/components/sections/about-me';
import Footer from '@/components/footer';
import HeroHeader from '@/components/sections/hero-header';
import ProjectSection from '@/components/sections/projects';
import ResumeSection from '@/components/sections/resume';
import ContactSection from '@/components/sections/contact';
import NavWrapper from '@/components/navbar/nav-wrapper';
import FadeInObserver from '@/components/fade-in-observer';

export default function Home() {
  return (
    <>
      <main className='bg-bg-color-1'>
        <FadeInObserver />
        <NavWrapper />
        <HeroHeader />
        <AboutSection />
        <ProjectSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
