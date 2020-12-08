// React-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import components and screens
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import Cart from './components/Cart';

//Import provider
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <Router>
            <ProductProvider>
                <div className='bg-white'>
                    <CartProvider>
                        <Header />
                        <Cart />
                        <Route path='/' component={HomePage} exact />
                        <Route path='/product/:id' component={ProductPage} />
                        <Route path='/checkout/:id?' component={CheckoutPage} />
                    </CartProvider>

                    <Footer />
                </div>
            </ProductProvider>
        </Router>
    );
}

export default App;
