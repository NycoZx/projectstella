import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Sobre Mim</h2>
      <p>
        Olá, meu nome é [Seu Nome] e sou um desenvolvedor front-end com
        experiência em criar sites responsivos e interativos. Tenho paixão por
        resolver problemas e criar soluções inovadoras.
      </p>
    </motion.section>
  );
}

export default About;
