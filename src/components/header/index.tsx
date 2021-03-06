import React, { memo } from 'react';
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
          <Link to="/units">
            <span>Unidades</span>
          </Link>
          <Link to="/assets">
            <span>Ativos</span>
          </Link>
          <Link to="/users">
            <span>Usuários</span>
          </Link>
          <Link to="/moreinfo">
            <span>Mais informações</span>
          </Link>
        </div>
      </NavBar>
    </Container>
  );
};

export default memo(Header);
