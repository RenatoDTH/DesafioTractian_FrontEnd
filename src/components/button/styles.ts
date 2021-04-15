import styled from 'styled-components';

export const Container = styled.button`
  background: #f8f8f8;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e28;
  width: 100%;
  font-weight: 500;
  margin: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: #1e3a8a;
    color: #f8f8f8;
  }
`;
