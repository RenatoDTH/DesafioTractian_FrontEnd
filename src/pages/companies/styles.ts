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
