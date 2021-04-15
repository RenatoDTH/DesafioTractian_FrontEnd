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
  flex-direction: row;
  align-self: center;
  margin-top: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;
