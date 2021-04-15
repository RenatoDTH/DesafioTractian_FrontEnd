import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const ContainerGraph = styled.div`
  align-self: center;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

export const TextContent = styled.div`
  p {
    font-size: 22px;
    line-height: 40px;
  }

  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
      line-height: 24px;
    }

    h1 {
      margin-top: 18px;
      margin-bottom: 18px;
    }
  }
`;
