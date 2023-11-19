document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = form.querySelector('input[name="nombre"]');
        const contacto = form.querySelector('input[name="contacto"]');
        const email = form.querySelector('input[name="email"]');
        const comentario = form.querySelector('textarea[name="comentario"]');

        if (typeof nombre.value !== 'string' || nombre.value.trim() === '') {
            alert('Por favor, ingrese un nombre válido.');
            return;
        }

        if (typeof contacto.value !== 'string' || isNaN(contacto.value) || contacto.value.trim().length !== 10) {
            alert('Por favor, ingrese un número de teléfono válido (10 dígitos numéricos).');
            return;
        }

        if (
            typeof email.value !== 'string' ||
            !email.value.includes('@') ||
            !email.value.includes('.') ||
            email.value.trim().indexOf('@') === 0 ||
            email.value.trim().lastIndexOf('.') === email.value.trim().length - 1
        ) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (typeof comentario.value !== 'string' || comentario.value.trim() === '') {
            alert('Por favor, ingrese su comentario.');
            return;
        }

        alert('Comentario enviado exitosamente!');
        form.reset();
    });
});
