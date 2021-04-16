import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 48px;
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
