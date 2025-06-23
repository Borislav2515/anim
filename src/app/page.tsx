import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import About from '@/components/About';
import LookingForHomeSection from '@/components/LookingForHomeSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Statistics />
      <About />
      <LookingForHomeSection />
    </main>
  );
}
