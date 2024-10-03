import sgMail from '@sendgrid/mail';
import { APIRoute } from 'astro';

// Configura la clave API de SendGrid
const sendgridApiKey = process.env.SENDGRID_API_KEY as string

if (!sendgridApiKey) {
    throw new Error('La clave de API de SendGrid no está definida en las variables de entorno.');
}
sgMail.setApiKey(sendgridApiKey);


export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  // Extrae los datos del formulario
  const { name, email, medida, msg } = data;

  // Define el mensaje
  const msgToSend = {
    to: 'jordi@reprodisseny.com', // Cambia esto a tu destinatario
    from: 'noreply@reprodisseny.com', // Cambia esto a tu remitente verificado
    subject: `Consulta de precio de calendario por ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMedida: ${medida}\nMensaje: ${msg}`,
    html: `<strong>Nombre:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Medida:</strong> ${medida}<br><strong>Mensaje:</strong> ${msg}`
  };

  try {
    await sgMail.send(msgToSend);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Error enviando el correo.' }), { status: 500 });
  }
};
