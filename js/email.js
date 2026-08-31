document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvpForm');
    const mensaje = document.getElementById('mensaje');
    const submitBtn = rsvpForm?.querySelector('button[type="submit"]');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre')?.value.trim();
            const email = document.getElementById('email')?.value.trim();

            if (!nombre || !email) {
                mensaje.textContent = '⚠️ Por favor completa todos los campos.';
                mensaje.style.color = 'red';
                return;
            }

            if (submitBtn) submitBtn.disabled = true;
            mensaje.textContent = '📤 Enviando...';
            mensaje.style.color = '#333';

            // Enviar con FormSubmit usando fetch
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('email', email);
            formData.append('_captcha', 'false');

            fetch('https://formsubmit.co/ajax/jazz15cumple@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('✅ Email enviado:', data);
                // Mostrar mensaje de éxito con flores
                mensaje.innerHTML = '🌸 ¡CONFIRMADO! 🌸<br><br>¡Gracias por tu confirmación!<br>Te esperamos en la fiesta 💕';
                mensaje.style.color = '#28a745';
                mensaje.style.fontSize = '18px';
                mensaje.style.fontWeight = 'bold';
                mensaje.style.textAlign = 'center';
                
                // Limpiar formulario
                rsvpForm.reset();
                
                // Habilitar botón
                if (submitBtn) submitBtn.disabled = false;
                
                // Opcional: limpiar mensaje después de 5 segundos
                setTimeout(() => {
                    // No limpiamos para que quede visible el mensaje
                }, 5000);
            })
            .catch(error => {
                console.error('❌ Error:', error);
                mensaje.innerHTML = '❌ Error al enviar.<br>Por favor intenta nuevamente.';
                mensaje.style.color = 'red';
                if (submitBtn) submitBtn.disabled = false;
            });
        });
    }
});