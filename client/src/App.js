// React-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import components and screens
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return (
        <Router>
            <div className='bg-white'>
                <Header />

                <Route path='/' component={HomeScreen} exact />
                <Route path='/product/:id' component={ProductScreen} />

                <Footer />
            </div>
        </Router>
    );
}

export default App;
