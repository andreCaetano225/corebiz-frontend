import { useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { FeaturedProduct } from './components/FeaturedProduct';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import './styles/App.css';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <Banner isMobile={isMobile} />
      <FeaturedProduct isMobile={isMobile} />
      <Newsletter />
      <Footer isMobile={isMobile} />
    </>
  );
}

export default App;
