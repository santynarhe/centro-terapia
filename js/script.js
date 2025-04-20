// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén el formulario y el contenedor para el mensaje
    const formularioReserva = document.getElementById("formulario-reserva");
    const mensajeExito = document.createElement("div");
  
    // Añadir clases al mensaje de éxito para estilo
    mensajeExito.style.backgroundColor = "#34bfa3";
    mensajeExito.style.color = "#fff";
    mensajeExito.style.padding = "10px";
    mensajeExito.style.marginTop = "20px";
    mensajeExito.style.textAlign = "center";
    mensajeExito.style.borderRadius = "8px";
  
    // Escuchar el evento de envío del formulario
    formularioReserva.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe (recargue la página)
      
      // Agregar mensaje de éxito
      mensajeExito.textContent = "¡Reserva realizada con éxito! Nos pondremos en contacto contigo pronto.";
      formularioReserva.appendChild(mensajeExito);
  
      // Limpiar el formulario después de la "reserva"
      formularioReserva.reset();
    });
  });
  