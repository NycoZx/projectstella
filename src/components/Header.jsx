import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  display: inline;
  margin: 0 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ff6347;
  }
`;

function Header() {
  return (
    <header>
      <Nav>
        <Ul>
          <Li><StyledLink to="/about">Sobre Mim</StyledLink></Li>
          <Li><StyledLink to="/projects">Projetos</StyledLink></Li>
          <Li><StyledLink to="/contact">Contato</StyledLink></Li>
        </Ul>
      </Nav>
    </header>
  );
}

export default Header;
