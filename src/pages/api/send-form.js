import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export async function post({ request }) {
  if (request.method === 'POST') {
    try {
      const data = await request.formData();
      const name = data.get('nombre');
      const email = data.get('email');
      const tipoCalendario = data.get('tipoCalendario');
      const tamaño = data.get('tamaño');
      const cantidad = data.get('cantidad');

      // Enviar correo con SendGrid
      const msg = {
        to: 'jordi@reprodisseny.com', // Cambia al destinatario real
        from: 'noreply@reprodisseny.com', // Cambia a un remitente verificado
        subject: `Solicitud de presupuesto de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTipo de Calendario: ${tipoCalendario}\nTamaño: ${tamaño}\nCantidad: ${cantidad}`,
      };

      await sendGrid.send(msg);
      return new Response(JSON.stringify({ message: 'Formulario enviado con éxito' }), { status: 200 });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return new Response(JSON.stringify({ message: 'Error al enviar el correo' }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ message: 'Método no permitido' }), { status: 405 });
}
