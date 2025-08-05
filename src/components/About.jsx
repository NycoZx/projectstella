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
        Olá,[Stella] você é a mulher mais linda do mundo 
      </p>
    </motion.section>
  );
}

export default About;
