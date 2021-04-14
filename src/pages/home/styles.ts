import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const TextContent = styled.div`
  p {
    font-size: 28px;
    line-height: 48px;
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
