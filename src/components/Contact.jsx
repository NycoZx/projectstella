import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 60px;
  background-color: #f4f4f4;
  color: #333;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff4500;
  }
`;

function Contact() {
  return (
    <ContactSection>
      <FormContainer>
        <h2>Entre em Contato</h2>
        <form>
          <label htmlFor="name">Nome:</label>
          <InputField type="text" id="name" name="name" required />
          
          <label htmlFor="email">E-mail:</label>
          <InputField type="email" id="email" name="email" required />
          
          <label htmlFor="message">Mensagem:</label>
          <TextareaField id="message" name="message" required></TextareaField>
          
          <SubmitButton type="submit">Enviar</SubmitButton>
        </form>
      </FormContainer>
    </ContactSection>
  );
}

export default Contact;
