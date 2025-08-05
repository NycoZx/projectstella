import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Navegação Principal
const Nav = styled.nav`
  background-color: transparent; /* Fundo transparente */
  padding: 20px 40px;
  text-align: right;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil para o efeito de profundidade */
  backdrop-filter: blur(10px); /* Efeito de desfoque no fundo para dar a sensação de fundo dinâmico */
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Clareia um pouco o fundo quando passa o mouse */
  }
`;

// Lista de Links
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 30px; /* Distância entre os itens */
  margin: 0;
`;

// Item da Lista
const Li = styled.li`
  display: inline-block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px); /* Pequeno movimento ao passar o mouse */
  }
`;

// Links Estilizados
const StyledLink = styled(Link)`
  color: #d5006d;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.3s, transform 0.3s ease-in-out;
  
  &:hover {
    color: #ff80ab;
    transform: scale(1.1);
    text-shadow: 0 0 15px #ff80ab;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: #ff80ab;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

// Partículas animadas de fundo
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: transparent;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgba(255, 0, 107, 0.8);
    border-radius: 50%;
    animation: float 4s ease-in-out infinite;
  }

  &::before {
    left: 30%;
    animation-duration: 5s;
  }

  &::after {
    left: 70%;
    animation-duration: 6s;
    opacity: 0.8;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

// Responsividade para dispositivos menores
const ResponsiveNav = styled(Nav)`
  @media (max-width: 768px) {
    text-align: center;
    padding: 20px;
    
    ul {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin-bottom: 15px;
    }
  }
`;

function Header() {
  return (
    <header>
      <ParticlesContainer />
      <ResponsiveNav>
        <Ul>
          <Li><StyledLink to="/home">Home</StyledLink></Li>
          <Li><StyledLink to="/about">Sobre</StyledLink></Li>
          <Li><StyledLink to="/projects">Projetos</StyledLink></Li>
          <Li><StyledLink to="/contact">Contato</StyledLink></Li>
        </Ul>
      </ResponsiveNav>
    </header>
  );
}

export default Header;
