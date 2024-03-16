
import './App.css'
import { BrowserRouter , Route ,Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import HomePage from './pages/homepage'
import NosotrosPage from './pages/nosotros'
import CuestionPage from './pages/cuestionpage'
import ContactanosPage from './pages/contactanos'
import { useMediaQuery } from '@react-hook/media-query';
import LoadingPage from './pages/nophone'
import ShopPage from './pages/shop'

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  if (isMobile) {
    return (
      <LoadingPage/>
    );
  }



  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="about-us" element={<NosotrosPage/>} />
          <Route path="cuestion" element={<CuestionPage/>} />
          <Route path="shop-mateel" element={<ShopPage />} />
          <Route path="contact-us" element={<ContactanosPage/>} />
        </Routes>

      </BrowserRouter> 
    )
    
}

export default App
