import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Title from './components/Title';
import Footer from './components/Footer';
import Tablle from './components/Table';
import useQueryData from './useQueryData';
import Graphic from './components/Graphic';
import useDataProfessional from './useDataProfessional';

function App() {
  const { dados: consultas, erro: queriesErro } = useQueryData();
  const { dados: profissionais, erro: errroProfessional } = useDataProfessional();
  useDataProfessional();

  if (queriesErro || errroProfessional) {
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Area Administrativa</Title>
        <Tablle consultas={consultas} />
        <Graphic consultas={consultas} profissionais={profissionais} />
      </Container>
      <Footer />
    </>
  );
}

export default App;