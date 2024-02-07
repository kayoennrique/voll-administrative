import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Title from './components/Title';
import Footer from './components/Footer';
import Tablle from './components/Table';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Area Administrativa</Title>
        <Tablle />
      </Container>
      <Footer />
    </>
  );
}

export default App;