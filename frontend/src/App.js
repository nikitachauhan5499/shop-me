import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={Home} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
