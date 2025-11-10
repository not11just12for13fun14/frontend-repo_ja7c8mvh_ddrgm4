import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentGrid from './components/ContentGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <Hero />
      <ContentGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
