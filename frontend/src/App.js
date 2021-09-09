import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container style={{marginTop: '10px'}}>
          <Route path="/" component={Home} exact/>
          <Route path="/product/:id" component={ProductDetails}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
