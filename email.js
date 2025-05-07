document.addEventListener("DOMContentLoaded", function () { //Se espra que se cargue el HTML antes de ejecutar el script. Se asegura que el DOM exita antes de laburarlo
    const form = document.getElementById('contact-form'); //guarda formulario
    const responseMessage = document.getElementById('response-message'); //guarda mensaje de error/exito
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // evita la redirección a la pagina de formspree
  
      const formData = new FormData(form); //crea objeto formData con los datos del formulario de contacto, listos para enviarlos por fetch
        
      //se envia direccion URL de formspree y los datos en formato JSON, para evitar redirecciones
      fetch(form.action, { 
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {//se evalua respuesta de protocolo
        if (response.ok) {
          responseMessage.className = 'alert alert-success mt-3'; //uso estilo de bootstrap
          responseMessage.textContent = '¡Gracias! Tu mensaje fue enviado correctamente.';
          form.reset(); 
        } else {
          responseMessage.className = 'alert alert-danger mt-3'; //uso estilo de bootstrap
          responseMessage.textContent = 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
        }
      })
      .catch(() => {
        responseMessage.className = 'alert alert-danger mt-3'; //uso estilo de bootstrap
        responseMessage.textContent = 'Error de red. Por favor, verifica tu conexión.';
      });
    }
    );
  }
);
  