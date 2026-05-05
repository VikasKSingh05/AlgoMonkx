import {
  Header,
  Footer,
  Hero,
  Features,
  Courses,
  Mission,
  HowItWorks,
  ContestFeatures,
  Services,
  CTABanner,
  Mentors,
  Testimonials,
  Quotes,
  FAQ,
  Blog,
  CodeEditor,
  ProCTA,
} from './components';

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
