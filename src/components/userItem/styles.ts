import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding: 24px 24px 0 24px;
  margin: 24px;
  justify-content: space-between;
  align-items: center;
  background-color: #1e3a8a;
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;

  button {
    width: 200px;
    border-radius: 0 0 12px 12px;
    outline: 0;
    background-color: #f8f8f8;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const ModalContent = styled.div`
  p {
    color: #1e3a8a;
    font-weight: 500;
  }

  h2 {
    color: #1e3a8a;
    font-weight: 700;
  }
`;
