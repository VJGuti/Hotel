const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

app.post('/api/reservation', (req, res) => {
  const { name, email, date } = req.body;

  // Aquí puedes agregar la lógica para almacenar la reservación en la base de datos

  // Configura el servicio de correo electrónico
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  // Configura el correo electrónico
  let mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Confirmación de reservación',
    text: `Hola ${name},\n\nGracias por reservar en Dubai Hotel Suites. Tu reservación para el ${date} ha sido confirmada.\n\nSaludos,\nDubai Hotel Suites`
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
});

app.get('/api/posts', (req, res) => {
  // Aquí puedes agregar la lógica para obtener los posts del blog desde la base de datos
  // Por ahora, solo devolveremos algunos posts de ejemplo
  const posts = [
    { id: 1, title: 'Bienvenido a Dubai Hotel Suites', content: 'Ubicado en el corazón de Caracas, Venezuela, Dubai Hotel Suites ofrece una experiencia de lujo inigualable.' },
    { id: 2, title: 'Explora Caracas', content: 'Descubre las maravillas de Caracas, la vibrante capital de Venezuela.' },
    // Agrega más posts según sea necesario
  ];

  res.status(200).json(posts);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));