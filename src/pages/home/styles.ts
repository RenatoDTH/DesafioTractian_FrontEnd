import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 900px;
  align-items: flex-start;
  margin: 40px auto;
  padding: 28px;
  border-radius: 12px;
  justify-content: space-between;

  p {
    font-size: 28px;
    line-height: 48px;
  }

  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: auto;
    max-width: 100%;

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

export const Image = styled.img`
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 280px;
  }

  @media screen and (max-width: 500px) {
    width: 240px;
    height: 120px;
  }
`;
