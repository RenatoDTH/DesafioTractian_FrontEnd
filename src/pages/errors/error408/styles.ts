import styled from 'styled-components';

export const Button = styled.button`
  background: #f8f8f8;
  height: 56px;
  width: 150px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e28;
  font-weight: 500;
  margin: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background: #1e3a8a;
    color: #f8f8f8;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
    font-weight: 400;
    margin: 2px;
  }
`;
