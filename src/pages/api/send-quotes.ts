import type { APIRoute } from 'astro';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const empresa = formData.get('empresa') as string;
    const tipoCalendario = formData.get('tipoCalendario') as string;
    const tamaño = formData.get('tamaño') as string;
    const cantidad = formData.get('cantidad') as string;

    if (!nombre || !email || !tipoCalendario || !tamaño || !cantidad) {
      return new Response(JSON.stringify({ success: false, message: 'Faltan campos requeridos' }), { status: 400 });
    }

    const message = `
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Empresa: ${empresa}
      Tipo de Calendario: ${tipoCalendario}
      Tamaño: ${tamaño}
      Cantidad: ${cantidad}
    `;

    const msg = {
      to: 'jordi@reprodisseny.com',
      from: 'noreply@reprodisseny.com',
      subject: `Solicitud de oferta de calendario - ${tipoCalendario}`,
      text: message,
    };

    await sendgrid.send(msg);

    return new Response(JSON.stringify({ success: true, message: 'Correo enviado correctamente' }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error al enviar el correo', error: error.message }), { status: 500 });
  }
};
