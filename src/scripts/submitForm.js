export function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío automático del formulario
  
    const form = event.target;
    const formData = new FormData(form);
  
    // Realiza la solicitud fetch para enviar los datos
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Formulario enviado correctamente:', data);
    })
    .catch((error) => {
      console.error('Error al enviar el formulario:', error);
    });
  }
  