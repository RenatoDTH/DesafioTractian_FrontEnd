import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  padding: 24px;
  margin: 24px;
  justify-content: center;
  align-items: center;
  background-color: #1e3a8a;
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;

  img {
    width: 250px;
    height: 150px;
    border-radius: 12px 12px 0 0;
  }

  button {
    width: 250px;
    border-radius: 0 0 12px 12px;
    outline: 0;
    background-color: #f8f8f8;
  }
`;
