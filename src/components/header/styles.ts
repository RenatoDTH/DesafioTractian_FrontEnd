import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #1e3a8a;
  align-items: center;
`;

export const NavBar = styled.nav`
  width: 100%;
  background: #1e3a8a;
  position: sticky;
  top: 0;

  span {
    font-weight: 700;
  }

  label,
  #hamburgerMenu {
    display: none;
  }

  #items {
    display: flex;
  }

  #items a {
    width: 20%;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    text-align: center;
  }

  #items a:hover {
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 768px) {
    label {
      display: inline-block;
      color: #fff;
      background: transparent;
      font-size: 1.2rem;
      padding: 10px;
    }

    #items a {
      box-sizing: border-box;
      display: block;
      width: 100%;
      border-top: 1px solid #fff;
    }

    #items {
      display: none;
    }

    input:checked ~ #items {
      display: block;
    }
  }
`;
