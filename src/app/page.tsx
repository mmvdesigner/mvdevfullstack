import AiOptimizer from '@/components/ai-optimizer';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <AiOptimizer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
