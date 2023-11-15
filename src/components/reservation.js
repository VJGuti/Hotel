import React, { useState } from 'react';
import axios from 'axios';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    // Agrega más campos según sea necesario
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    axios.post('/api/reservation', formData)
      .then(response => {
        // Maneja la respuesta del servidor
      })
      .catch(error => {
        // Maneja los errores
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      {/* Agrega más campos según sea necesario */}
      <button type="submit">Reservar</button>
    </form>
  );
}

export default Reservation;