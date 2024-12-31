import Hero from './components/Hero';
import Services from './components/Services';
import PCBFeatures from './components/PCBFeatures';
import PCBOrderForm from './components/PCBOrderForm';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Services />
      <PCBFeatures />
      <PCBOrderForm />
      <Contact />
    </div>
  );
}
