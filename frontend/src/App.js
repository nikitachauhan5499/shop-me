import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
    <main>
      <Container>
        Shop Me!
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
