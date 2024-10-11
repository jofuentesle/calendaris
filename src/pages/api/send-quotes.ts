import sgMail from '@sendgrid/mail';

// Configura la API Key de SendGrid
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export async function post({ request }) {
  try {
    // Obtener los datos del formulario
    const formData = await request.formData();
    const toEmail = formData.get('to');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Validación básica
    if (!toEmail || !subject || !message) {
      return new Response('Todos los campos son obligatorios.', { status: 400 });
    }

    // Configuración del mensaje
    const msg = {
      to: toEmail, // Cambia esto por el correo al que deseas enviar el mensaje
      from: 'noreply@yourdomain.com', // Cambia por tu remitente verificado en SendGrid
      subject: subject,
      text: message,
      html: `<p>${message}</p>`,
    };

    // Enviar el correo electrónico
    await sgMail.send(msg);

    // Responder con éxito
    return new Response(JSON.stringify({ message: 'Correo enviado correctamente.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response('Error al enviar el correo.', { status: 500 });
  }
}
