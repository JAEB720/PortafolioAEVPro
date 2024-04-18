import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar el formulario, como usar una API de correo electrónico
    console.log('Formulario enviado:', formData);
    // Aquí podrías también reiniciar el estado del formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Form>
      <Form.Field>
        <label>Nombre</label>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Correo electrónico</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Mensaje</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type='submit' onClick={handleSubmit}>Enviar</Button>
    </Form>
  );
};

export default Contact;
