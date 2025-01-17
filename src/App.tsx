import { Banner } from './components/Banner';
import { FeaturedProduct } from './components/FeaturedProduct';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <FeaturedProduct />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
