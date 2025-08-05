import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ContactContainer = styled.section`
  background: #ff006aff;
  color: #fff;
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 400px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #ddd;
  resize: none;
`;

const Button = styled.button`
  background-color: #fff;
  color: #ff006aff;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Title>Contato</Title>
        <ContactForm>
          <Input type="text" placeholder="Seu Nome" required />
          <Input type="email" placeholder="Seu Email" required />
          <Input type="text" placeholder="Assunto" required />
          <Textarea id="message" name="message" placeholder="Sua Mensagem" required />
          <Button type="submit">Enviar</Button>
        </ContactForm>
      </motion.div>
    </ContactContainer>
  );
}

export default Contact;
