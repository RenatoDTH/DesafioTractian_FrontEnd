import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';

import { Container, NavBar } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <NavBar>
        <label htmlFor="hamburgerMenu">&#9776;</label>
        <input type="checkbox" id="hamburgerMenu" />

        <div id="items">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="companies">
            <span>Empresas</span>
          </Link>
          <Link to="/">
            <span>Unidades</span>
          </Link>
          <Link to="/">
            <span>Ativos</span>
          </Link>
          <Link to="/">
            <span>Usuários</span>
          </Link>
          <Link to="/">
            <span>Mais informações</span>
          </Link>
        </div>
      </NavBar>
    </Container>
  );
};

export default Header;
