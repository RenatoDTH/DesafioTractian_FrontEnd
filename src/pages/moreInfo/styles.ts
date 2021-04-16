import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 48px;
`;

export const ContentGraph = styled.div`
  display: flex;
  align-self: center;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 500px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 300px;
  }
`;

export const TextContent = styled.div`
  margin-bottom: 24px;
  p {
    font-size: 22px;
    line-height: 40px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
