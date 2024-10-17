import { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv'; 
dotenv.config();
import sendGrid from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('Falta la clave API de SendGrid en las variables de entorno');
}

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function post(req: IncomingMessage, res: ServerResponse) {
  let body = '';

  // Obtener los datos del cuerpo de la solicitud
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const { name, email, telefono, empresa, tamaño, cantidad, tipoCalendario } = JSON.parse(body);

    try {
      await sendgrid.send({
        to: 'tu-email@empresa.com', // Cambia a tu dirección de correo electrónico
        from: 'noreply@empresa.com', // Verifica que tu dominio está autorizado en SendGrid
        subject: `Solicitud de presupuesto de calendarios - ${tipoCalendario}`,
        html: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Tamaño del calendario:</strong> ${tamaño}</p>
          <p><strong>Cantidad:</strong> ${cantidad}</p>
        `,
      });

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Correo enviado correctamente.' }));
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Error al enviar el correo.' }));
    }
  });
}
