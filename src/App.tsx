import { useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { FeaturedProduct } from './components/FeaturedProduct';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import './styles/App.css';
import { ProductType } from './types/product';
import api from './services/api';
import { CartProvider } from './context/CartContext';
import { ConfigSEO } from './components/Seo';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      setTimeout(async () => {
        const response = await api.get('products');
        setProducts(response.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    fetchProducts();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CartProvider>
      <ConfigSEO />
      <Header />
      <Banner isMobile={isMobile} />
      <FeaturedProduct
        isMobile={isMobile}
        products={products}
        loading={loading}
      />
      <Newsletter />
      <Footer isMobile={isMobile} />
    </CartProvider>
  );
}

export default App;
