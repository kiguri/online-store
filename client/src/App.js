// React-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import components and screens
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

//Import provider
import { ProductProvider } from './contexts/ProductContext';

function App() {
    return (
        <Router>
            <ProductProvider>
                <div className='bg-white'>
                    <Header />

                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/product/:id' component={ProductScreen} />

                    <Footer />
                </div>
            </ProductProvider>
        </Router>
    );
}

export default App;
