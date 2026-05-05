import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import ContestFeatures from './components/ContestFeatures';
import Services from './components/Services';
import CTABanner from './components/CTABanner';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Quotes from './components/Quotes';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CodeEditor from './components/CodeEditor';
import ProCTA from './components/ProCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Mission />
        <HowItWorks />
        <ContestFeatures />
        <Services />
        <CTABanner />
        <Mentors />
        <Testimonials />
        <Quotes />
        <FAQ />
        <Blog />
        <CodeEditor />
        <ProCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
