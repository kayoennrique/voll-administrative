import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Title from './components/Title';
import Footer from './components/Footer';
import Tablle from './components/Table';
import useQueryData from './useQueryData';

function App() {
  const { dados, erro } = useQueryData();
  return (
    <>
      <Header />
      <Container>
        <Title>Area Administrativa</Title>
        <Tablle consultas={dados} />
      </Container>
      <Footer />
    </>
  );
}

export default App;