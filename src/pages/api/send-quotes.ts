// src/pages/api/send-email.ts
import type { APIRoute } from 'astro';
import sendgrid from '@sendgrid/mail';

// Configura la API Key de SendGrid
sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

// Función para manejar la solicitud
export const post: APIRoute = async ({ request }) => {
  console.log('Solicitud recibida en /api/send-quotes');
  console.log(sendgrid);
  try {
    // Extraer datos del formulario
    const formData = await request.formData();
    const to = formData.get('to') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Verificar que los datos necesarios estén presentes
    if (!to || !subject || !message) {
      return new Response('Faltan campos requeridos', { status: 400 });
    }

    // Configurar el correo electrónico
    const msg = {
      to,
      from: 'noreply@reprodisseny.com', // Reemplaza con tu dirección de correo
      subject,
      text: message,
    };

    // Enviar el correo electrónico con SendGrid
    await sendgrid.send(msg);

    // Respuesta exitosa
    return new Response('Correo enviado correctamente', { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response('Error al enviar el correo', { status: 500 });
  }
};
