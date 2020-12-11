// React-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import SigninPage from './pages/SigninPage';
import ProfilePage from './pages/ProfilePage';

//Import provider
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';

function App() {
    return (
        <Router>
            <UserProvider>
                <ProductProvider>
                    <div className='bg-white'>
                        <CartProvider>
                            <Header />
                            <Cart />
                            <Route path='/' component={HomePage} exact />
                            <Route path='/login' component={SigninPage} exact />
                            <Route path='/profile' component={ProfilePage} />
                            <Route
                                path='/product/:id'
                                component={ProductPage}
                            />
                            <Route
                                path='/checkout/:id?'
                                component={CheckoutPage}
                            />
                        </CartProvider>

                        <Footer />
                    </div>
                </ProductProvider>
            </UserProvider>
        </Router>
    );
}

export default App;
