import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const MainContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f06, #000000ff);
  background-size: 400% 400%;
  animation: gradientBackground 10s ease infinite;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;

  @keyframes gradientBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 2px;
  line-height: 1.3;
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  color: #ecf0f1;
  margin-bottom: 30px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const CTAButton = styled.button`
  background-color: #ff0e87ff;
  color: #fff;
  padding: 16px 50px;
  border: none;
  border-radius: 50px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff006aff;
    transform: scale(1.05);
  }
`;

const RouteAnimation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <MainContainer>
      <ContentSection>
        {/* Animação do título */}
        <RouteAnimation
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Title>Bem-vindo ao Meu Portfólio</Title>
        </RouteAnimation>

        {/* Animação do subtítulo */}
        <RouteAnimation
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <Subtitle>
            Olá, Stella, você é perfeita
          </Subtitle>
        </RouteAnimation>

        {/* Animação do botão CTA */}
        <RouteAnimation
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "backOut" }}
        >
          <CTAButton onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
            Veja meus Projetos
          </CTAButton>
        </RouteAnimation>
      </ContentSection>
    </MainContainer>
  );
}

export default Home;
