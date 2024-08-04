import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Modal, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Contact.css';

export const Contact = () => {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); 
  const validateForm = () => {
    const elements = form.current.elements;
    const name = elements.user_name.value.trim();
    const email = elements.user_email.value.trim();
    const message = elements.message.value.trim();

    if (!name || !email || !message) {
      const errors = [];
      if (!name) errors.push('Nombre');
      if (!email) errors.push('Email');
      if (!message) errors.push('Mensaje');
      setModalMessage(`Por favor, complete los siguientes campos: ${errors.join(', ')}`);
      setModalType('error');
      setModalOpen(true);
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Si la validación falla, no enviar el formulario

    emailjs
      .sendForm('service_s84q8qi', 'template_1aift79', form.current, 'MRCnXXlZQ2j7r3q_5')
      .then(
        (result) => {
          setModalMessage('¡El mensaje se envió con éxito!');
          setModalType('success');
          form.current.reset(); // Limpiar  formulario
        },
        (error) => {
          setModalMessage('Ocurrió un error al enviar el mensaje.');
          setModalType('error');
        }
      )
      .finally(() => {
        setModalOpen(true); // modal
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Nombre</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Mensaje</label>
        <textarea name="message" required />

        <Button type="submit" className="submit-button">Enviar</Button>
      </form>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="small"
      >
        <Modal.Header>Resultado del Envío</Modal.Header>
        <Modal.Content>
          <p>{modalMessage}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => setModalOpen(false)}
            color={modalType === 'success' ? 'green' : 'red'}
          >
            Cerrar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Contact;
