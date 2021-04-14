import React from 'react';
import { ContainerContent, Header } from '../../components';
import { Container, TextContent, Image } from './styles';
import backgroundImg from '../../assets/background.svg';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <TextContent>
            <p>Monitoramento de máquinas Tractian:</p>
            <h1>O sistema preditivo mais completo do mercado</h1>
            <p>
              Neste site terciário voltado a informações, você poderá visualizar
              dados sobre as empresas, unidades e usuários{' '}
            </p>
          </TextContent>
          <Image alt="TechImg" src={backgroundImg} />
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
