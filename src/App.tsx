import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ui/behavior/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
