import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  margin: 0 20px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff80ab;
    transform: scale(1.1);
  }
`;

function Header() {
  return (
    <header>
      <Nav>
        <Ul>
          <Li><StyledLink to="/home">Home</StyledLink></Li>
          <Li><StyledLink to="/about">Sobre</StyledLink></Li>
          <Li><StyledLink to="/projects">Projetos</StyledLink></Li>
          <Li><StyledLink to="/contact">Contato</StyledLink></Li>
        </Ul>
      </Nav>
    </header>
  );
}

export default Header;
