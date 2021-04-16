import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 500px;
  }

  @media screen and (max-width: 540px) {
    width: 300px;
  }
`;
