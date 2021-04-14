import React from 'react';
import { Header } from '../../components';
import { Container, ContainerContent, Image } from './styles';
import backgroundImg from '../../assets/background.svg';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <div>
            <p>Monitoramento de máquinas Tractian:</p>
            <h1>O sistema preditivo mais completo do mercado</h1>
            <p>
              Neste site terciário voltado a informações, você poderá visualizar
              dados sobre as empresas, unidades e usuários{' '}
            </p>
          </div>
          <Image alt="TechImg" src={backgroundImg} />
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
